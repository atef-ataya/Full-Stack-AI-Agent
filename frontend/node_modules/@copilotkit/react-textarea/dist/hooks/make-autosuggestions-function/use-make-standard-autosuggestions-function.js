"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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

// src/hooks/make-autosuggestions-function/use-make-standard-autosuggestions-function.tsx
var use_make_standard_autosuggestions_function_exports = {};
__export(use_make_standard_autosuggestions_function_exports, {
  useMakeStandardAutosuggestionFunction: () => useMakeStandardAutosuggestionFunction
});
module.exports = __toCommonJS(use_make_standard_autosuggestions_function_exports);
var import_shared = require("@copilotkit/shared");
var import_react_core = require("@copilotkit/react-core");
var import_react = require("react");

// src/lib/retry.tsx
function retry(fn, retriesLeft = 2, interval = 200, backoff = 1.5) {
  return new Promise((resolve, reject) => {
    fn().then(resolve).catch((error) => {
      if (retriesLeft === 1) {
        reject(error);
        return;
      }
      setTimeout(() => {
        retry(fn, retriesLeft - 1, interval * backoff, backoff).then(resolve).catch(reject);
      }, interval);
    });
  });
}

// src/hooks/make-autosuggestions-function/use-make-standard-autosuggestions-function.tsx
var import_runtime_client_gql = require("@copilotkit/runtime-client-gql");
function useMakeStandardAutosuggestionFunction(textareaPurpose, contextCategories, apiConfig) {
  const { getContextString, copilotApiConfig, runtimeClient } = (0, import_react_core.useCopilotContext)();
  const { chatApiEndpoint: url, publicApiKey, credentials, properties } = copilotApiConfig;
  const headers = __spreadValues(__spreadValues({}, copilotApiConfig.headers), publicApiKey ? { [import_shared.COPILOT_CLOUD_PUBLIC_API_KEY_HEADER]: publicApiKey } : {});
  const { maxTokens, stop, temperature = 0 } = apiConfig;
  return (0, import_react.useCallback)(
    (editorState, abortSignal) => __async(this, null, function* () {
      const res = yield retry(() => __async(this, null, function* () {
        var _a, _b, _c;
        const messages = [
          new import_runtime_client_gql.TextMessage({
            role: import_runtime_client_gql.Role.System,
            content: apiConfig.makeSystemPrompt(
              textareaPurpose,
              getContextString([], contextCategories)
            )
          }),
          ...apiConfig.fewShotMessages,
          editorState.textAfterCursor != "" ? new import_runtime_client_gql.TextMessage({
            role: import_runtime_client_gql.Role.User,
            content: editorState.textAfterCursor
          }) : null,
          new import_runtime_client_gql.TextMessage({
            role: import_runtime_client_gql.Role.User,
            content: `<TextAfterCursor>${editorState.textAfterCursor}</TextAfterCursor>`
          }),
          new import_runtime_client_gql.TextMessage({
            role: import_runtime_client_gql.Role.User,
            content: `<TextBeforeCursor>${editorState.textBeforeCursor}</TextBeforeCursor>`
          })
        ].filter(Boolean);
        const response = yield runtimeClient.generateCopilotResponse({
          data: {
            frontend: {
              actions: [],
              url: window.location.href
            },
            messages: (0, import_runtime_client_gql.convertMessagesToGqlInput)((0, import_runtime_client_gql.filterAgentStateMessages)(messages)),
            metadata: {
              requestType: import_runtime_client_gql.CopilotRequestType.TextareaCompletion
            },
            forwardedParameters: {
              maxTokens,
              stop,
              temperature
            }
          },
          properties,
          signal: abortSignal
        }).toPromise();
        let result = "";
        for (const message of (0, import_runtime_client_gql.convertGqlOutputToMessages)(
          (_c = (_b = (_a = response.data) == null ? void 0 : _a.generateCopilotResponse) == null ? void 0 : _b.messages) != null ? _c : []
        )) {
          if (abortSignal.aborted) {
            break;
          }
          if (message.isTextMessage()) {
            result += message.content;
          }
        }
        return result;
      }));
      return res;
    }),
    [apiConfig, getContextString, contextCategories, textareaPurpose]
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useMakeStandardAutosuggestionFunction
});
//# sourceMappingURL=use-make-standard-autosuggestions-function.js.map