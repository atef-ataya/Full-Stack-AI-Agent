"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/types/autosuggestions-config/suggestions-api-config.tsx
var suggestions_api_config_exports = {};
__export(suggestions_api_config_exports, {
  defaultSuggestionsApiConfig: () => defaultSuggestionsApiConfig,
  defaultSuggestionsFewShotMessages: () => defaultSuggestionsFewShotMessages,
  defaultSuggestionsMakeSystemPrompt: () => defaultSuggestionsMakeSystemPrompt
});
module.exports = __toCommonJS(suggestions_api_config_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultSuggestionsApiConfig,
  defaultSuggestionsFewShotMessages,
  defaultSuggestionsMakeSystemPrompt
});
//# sourceMappingURL=suggestions-api-config.js.map