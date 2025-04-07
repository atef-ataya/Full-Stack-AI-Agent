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

// src/types/autosuggestions-config/index.ts
var autosuggestions_config_exports = {};
__export(autosuggestions_config_exports, {
  defaultAutosuggestionsConfig: () => defaultAutosuggestionsConfig
});
module.exports = __toCommonJS(autosuggestions_config_exports);

// src/types/base/base-autosuggestions-config.tsx
var import_react_core = require("@copilotkit/react-core");
var defaultShouldToggleHoveringEditorOnKeyPress = (event, shortcut) => {
  if (event.key === shortcut && event.metaKey) {
    return true;
  }
  return false;
};
var defaultShouldAcceptAutosuggestionOnKeyPress = (event) => {
  if (event.key === "Tab") {
    return true;
  }
  return false;
};
var defaultShouldAcceptAutosuggestionOnTouch = () => false;
var defaultBaseAutosuggestionsConfig = {
  debounceTime: 250,
  contextCategories: import_react_core.defaultCopilotContextCategories,
  disableWhenEmpty: true,
  disabled: false,
  temporarilyDisableWhenMovingCursorWithoutChangingText: true,
  shouldToggleHoveringEditorOnKeyPress: defaultShouldToggleHoveringEditorOnKeyPress,
  shouldAcceptAutosuggestionOnKeyPress: defaultShouldAcceptAutosuggestionOnKeyPress,
  shouldAcceptAutosuggestionOnTouch: defaultShouldAcceptAutosuggestionOnTouch
};

// src/types/autosuggestions-config/suggestions-api-config.tsx
var import_runtime_client_gql = require("@copilotkit/runtime-client-gql");
var defaultSuggestionsMakeSystemPrompt = (textareaPurpose, contextString) => {
  return `You are a versatile writing assistant.
  
The user is writing some text.
The purpose is: "${textareaPurpose}"

Your job is to guess what the user will write next AS BEST YOU CAN.
Only guess a SHORT distance ahead. Usually 1 sentence, or at most 1 paragraph.

Adjust yourself to the user's style and implied intent.

The user will provide both the text before and after the cursor. You should use this to infer what the user is likely to write next.
<TextAfterCursor>
<TextBeforeCursor>
<YourSuggestion>

If we need to add a whitespace character to the suggested text, make sure to explicitly add it in.
Refrain from adding <YourSuggestion> tags when responding

The following external context is also provided. Use it to help you make better suggestions!!!
\`\`\`
${contextString}
\`\`\`
`;
};
var defaultSuggestionsFewShotMessages = [
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: "<TextAfterCursor>While I was there I also picked up some apples, oranges, and bananas.</TextAfterCursor>"
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: "This morning I woke up and went straight to the grocery store."
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.Assistant,
    content: " When I arrived I went straight to the produce section and picked out a big watermelon. "
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: "<TextAfterCursor>and (iii) to the appointment of the Equityholders' Representative pursuant to Section 10.7 of the Merger Agreement and to the provisions thereof.</TextAfterCursor>"
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: `<TextBeforeCursor>The Optionholder, in the Optionholder's capacity as a holder of vested Options, hereby irrevocably and unconditionally agrees: (i) that the Optionholder shall be deemed an "Equityholder" under the Merger Agreement and shall be entitled to the rights and benefits, and subject to the obligations, of an "Equityholder" thereunder;</TextBeforeCursor>`
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.Assistant,
    content: ` (ii) that, for purposes of this Agreement and the Merger Agreement, the applicable percentage set forth opposite the name of the Optionholder in the Distribution Waterfall shall be such the Optionholder's "Pro Rata Share"; `
  })
];
var defaultSuggestionsApiConfig = {
  makeSystemPrompt: defaultSuggestionsMakeSystemPrompt,
  fewShotMessages: defaultSuggestionsFewShotMessages
};

// src/types/autosuggestions-config/insertions-api-config.tsx
var import_runtime_client_gql2 = require("@copilotkit/runtime-client-gql");
var defaultInsertionsMakeSystemPrompt = (textareaPurpose, contextString) => {
  return `You are a versatile writing assistant helping the user insert new text into their existing work.
  
The user is writing some text.
The purpose is: "${textareaPurpose}"

The following external context is also provided. Use it to inform your suggestions when relevant!!!
\`\`\`
${contextString}
\`\`\`

The user will provide you with a prompt for an INSERTION into the text they are writing. 
Your job is to come up with an INSERTION into the text that the user would like to use, AS BEST YOU CAN.
Only insert a SHORT segment. Usually 1 sentence, or at most 1 paragraph.

Adjust yourself to the user's style and implied intent.


The user will provide the text before and after the cursor, as well as the INSERTION prompt. You should use this to infer the best relevant insertion.
The conversation will be structured as follows:
<TextAfterCursor>
<TextBeforeCursor>
<InsertionPrompt>

<YourInsertionSuggestion>
`;
};
var defaultInsertionsFewShotMessages = [
  new import_runtime_client_gql2.TextMessage({
    role: import_runtime_client_gql2.Role.User,
    content: "<TextAfterCursor>While I was there I also picked up some apples, oranges, and bananas.</TextAfterCursor>"
  }),
  new import_runtime_client_gql2.TextMessage({
    role: import_runtime_client_gql2.Role.User,
    content: "<TextBeforeCursor>This morning I woke up and went straight to the grocery store.</TextBeforeCursor>"
  }),
  new import_runtime_client_gql2.TextMessage({
    role: import_runtime_client_gql2.Role.User,
    content: "<InsertionPrompt>I bought a big watermelon</InsertionPrompt>"
  }),
  new import_runtime_client_gql2.TextMessage({
    role: import_runtime_client_gql2.Role.Assistant,
    content: "When I arrived I went straight to the produce section and picked out a big watermelon."
  }),
  new import_runtime_client_gql2.TextMessage({
    role: import_runtime_client_gql2.Role.User,
    content: "<TextAfterCursor>and (iii) to the appointment of the Equityholders' Representative pursuant to Section 10.7 of the Merger Agreement and to the provisions thereof.</TextAfterCursor>"
  }),
  new import_runtime_client_gql2.TextMessage({
    role: import_runtime_client_gql2.Role.User,
    content: `<TextBeforeCursor>The Optionholder, in the Optionholder's capacity as a holder of vested Options, hereby irrevocably and unconditionally agrees: (i) that the Optionholder shall be deemed an "Equityholder" under the Merger Agreement and shall be entitled to the rights and benefits, and subject to the obligations, of an "Equityholder" thereunder;</TextBeforeCursor>`
  }),
  new import_runtime_client_gql2.TextMessage({
    role: import_runtime_client_gql2.Role.User,
    content: "<InsertionPrompt>add section about the optionholder's pro rata share</InsertionPrompt>"
  }),
  new import_runtime_client_gql2.TextMessage({
    role: import_runtime_client_gql2.Role.Assistant,
    content: ` (ii) that, for purposes of this Agreement and the Merger Agreement, the applicable percentage set forth opposite the name of the Optionholder in the Distribution Waterfall shall be such the Optionholder's "Pro Rata Share"; `
  })
];
var defaultInsertionsApiConfig = {
  makeSystemPrompt: defaultInsertionsMakeSystemPrompt,
  fewShotMessages: defaultInsertionsFewShotMessages,
  forwardedParams: void 0
};

// src/types/autosuggestions-config/editing-api-config.tsx
var import_runtime_client_gql3 = require("@copilotkit/runtime-client-gql");
var defaultEditingMakeSystemPrompt = (textareaPurpose, contextString) => {
  return `You are a versatile writing assistant helping the user edit a portion of their text.
  
The user is writing some text.
The purpose is: "${textareaPurpose}"

The following external context is also provided. Use it when relevant.
\`\`\`
${contextString}
\`\`\`

The user has provided you with a PROMPT for EDITING a PORTION of the text. 
Your job is to come up with a new EDITED version OF THE SEGMENT IN QUESTION - AS BEST YOU CAN.
Only rewrite the portion of the text that the user has marked as "TextToEdit"!!!

Adjust yourself to the user's style and implied intent.

The conversation will be structured as follows:
<TextBeforeCursor>
<TextToEdit>
<TextAfterCursor>
<EditingPrompt>

<YourEditSuggestion>
`;
};
var defaultEditingFewShotMessages = [
  new import_runtime_client_gql3.TextMessage({
    role: import_runtime_client_gql3.Role.User,
    content: "<TextBeforeCursor>This morning I woke up and went straight to the grocery store. </TextBeforeCursor>"
  }),
  new import_runtime_client_gql3.TextMessage({
    role: import_runtime_client_gql3.Role.User,
    content: "<TextToEdit>While I was there I picked up some apples, oranges, and bananas. </TextToEdit>"
  }),
  new import_runtime_client_gql3.TextMessage({
    role: import_runtime_client_gql3.Role.User,
    content: "<TextAfterCursor>The grocery store was having a sale on fruit, so I decided to stock up.</TextAfterCursor>"
  }),
  new import_runtime_client_gql3.TextMessage({
    role: import_runtime_client_gql3.Role.User,
    content: "<EditingPrompt>I also bought a big watermelon</EditingPrompt>"
  }),
  new import_runtime_client_gql3.TextMessage({
    role: import_runtime_client_gql3.Role.Assistant,
    content: "While I was there I picked up some apples, oranges, and bananas, and a big watermelon."
  }),
  new import_runtime_client_gql3.TextMessage({
    role: import_runtime_client_gql3.Role.User,
    content: "<TextBeforeCursor>Yesterday, I spent the afternoon working on my new project.</TextBeforeCursor>"
  }),
  new import_runtime_client_gql3.TextMessage({
    role: import_runtime_client_gql3.Role.User,
    content: "<TextToEdit>It's quite challenging and requires a lot of focus.</TextToEdit>"
  }),
  new import_runtime_client_gql3.TextMessage({
    role: import_runtime_client_gql3.Role.User,
    content: "<TextAfterCursor>I'm really excited about the potential outcomes of this project.</TextAfterCursor>"
  }),
  new import_runtime_client_gql3.TextMessage({
    role: import_runtime_client_gql3.Role.User,
    content: "<EditingPrompt>emphasize the complexity and my enthusiasm for the project</EditingPrompt>"
  }),
  new import_runtime_client_gql3.TextMessage({
    role: import_runtime_client_gql3.Role.Assistant,
    content: "It's a highly complex task that demands intense concentration, but I'm incredibly enthusiastic about the promising prospects of this project."
  })
];
var defaultEditingApiConfig = {
  makeSystemPrompt: defaultEditingMakeSystemPrompt,
  fewShotMessages: defaultEditingFewShotMessages,
  forwardedParams: void 0
};

// src/types/autosuggestions-config/autosuggestions-config.tsx
var import_react_core2 = require("@copilotkit/react-core");
var defaultAutosuggestionsConfig = __spreadProps(__spreadValues({}, defaultBaseAutosuggestionsConfig), {
  contextCategories: import_react_core2.defaultCopilotContextCategories,
  chatApiConfigs: {
    suggestionsApiConfig: defaultSuggestionsApiConfig,
    insertionApiConfig: defaultInsertionsApiConfig,
    editingApiConfig: defaultEditingApiConfig
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultAutosuggestionsConfig
});
//# sourceMappingURL=index.js.map