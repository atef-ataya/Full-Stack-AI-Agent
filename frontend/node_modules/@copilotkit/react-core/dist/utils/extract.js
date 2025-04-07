"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/utils/extract.ts
var extract_exports = {};
__export(extract_exports, {
  extract: () => extract
});
module.exports = __toCommonJS(extract_exports);
var import_shared2 = require("@copilotkit/shared");
var import_runtime_client_gql = require("@copilotkit/runtime-client-gql");

// src/components/copilot-provider/copilotkit.tsx
var import_react = require("react");
var import_react_dom = require("react-dom");
var import_shared = require("@copilotkit/shared");
var import_jsx_runtime = require("react/jsx-runtime");
var defaultCopilotContextCategories = ["global"];

// src/utils/extract.ts
var import_runtime_client_gql2 = require("@copilotkit/runtime-client-gql");
function extract(_0) {
  return __async(this, arguments, function* ({
    context,
    instructions,
    parameters,
    include,
    data,
    abortSignal,
    stream,
    requestType = import_runtime_client_gql.CopilotRequestType.Task,
    forwardedParameters
  }) {
    var _a, _b;
    const { messages } = context;
    const action = {
      name: "extract",
      description: instructions,
      parameters,
      handler: (args) => {
      }
    };
    const includeReadable = (_a = include == null ? void 0 : include.readable) != null ? _a : false;
    const includeMessages = (_b = include == null ? void 0 : include.messages) != null ? _b : false;
    let contextString = "";
    if (data) {
      contextString = (typeof data === "string" ? data : JSON.stringify(data)) + "\n\n";
    }
    if (includeReadable) {
      contextString += context.getContextString([], defaultCopilotContextCategories);
    }
    const systemMessage = new import_runtime_client_gql.TextMessage({
      content: makeSystemMessage(contextString, instructions),
      role: import_runtime_client_gql.Role.System
    });
    const instructionsMessage = new import_runtime_client_gql.TextMessage({
      content: makeInstructionsMessage(instructions),
      role: import_runtime_client_gql.Role.User
    });
    const response = context.runtimeClient.asStream(
      context.runtimeClient.generateCopilotResponse({
        data: {
          frontend: {
            actions: [
              {
                name: action.name,
                description: action.description || "",
                jsonSchema: JSON.stringify((0, import_shared2.actionParametersToJsonSchema)(action.parameters || []))
              }
            ],
            url: window.location.href
          },
          messages: (0, import_runtime_client_gql2.convertMessagesToGqlInput)(
            includeMessages ? [systemMessage, instructionsMessage, ...(0, import_runtime_client_gql2.filterAgentStateMessages)(messages)] : [systemMessage, instructionsMessage]
          ),
          metadata: {
            requestType
          },
          forwardedParameters: __spreadProps(__spreadValues({}, forwardedParameters != null ? forwardedParameters : {}), {
            toolChoice: "function",
            toolChoiceFunctionName: action.name
          })
        },
        properties: context.copilotApiConfig.properties,
        signal: abortSignal
      })
    );
    const reader = response.getReader();
    let isInitial = true;
    let actionExecutionMessage = void 0;
    while (true) {
      const { done, value } = yield reader.read();
      if (done) {
        break;
      }
      if (abortSignal == null ? void 0 : abortSignal.aborted) {
        throw new Error("Aborted");
      }
      actionExecutionMessage = (0, import_runtime_client_gql.convertGqlOutputToMessages)(
        value.generateCopilotResponse.messages
      ).find((msg) => msg.isActionExecutionMessage());
      if (!actionExecutionMessage) {
        continue;
      }
      stream == null ? void 0 : stream({
        status: isInitial ? "initial" : "inProgress",
        args: actionExecutionMessage.arguments
      });
      isInitial = false;
    }
    if (!actionExecutionMessage) {
      throw new Error("extract() failed: No function call occurred");
    }
    stream == null ? void 0 : stream({
      status: "complete",
      args: actionExecutionMessage.arguments
    });
    return actionExecutionMessage.arguments;
  });
}
function makeInstructionsMessage(instructions) {
  return `
The user has given you the following task to complete:

\`\`\`
${instructions}
\`\`\`

Any additional messages provided are for providing context only and should not be used to ask questions or engage in conversation.
`;
}
function makeSystemMessage(contextString, instructions) {
  return `
Please act as an efficient, competent, conscientious, and industrious professional assistant.

Help the user achieve their goals, and you do so in a way that is as efficient as possible, without unnecessary fluff, but also without sacrificing professionalism.
Always be polite and respectful, and prefer brevity over verbosity.

The user has provided you with the following context:
\`\`\`
${contextString}
\`\`\`

They have also provided you with a function called extract you MUST call to initiate actions on their behalf.

Please assist them as best you can.

This is not a conversation, so please do not ask questions. Just call the function without saying anything else.
`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  extract
});
//# sourceMappingURL=extract.js.map