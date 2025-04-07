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

// src/types/autosuggestions-config/editing-api-config.tsx
var editing_api_config_exports = {};
__export(editing_api_config_exports, {
  defaultEditingApiConfig: () => defaultEditingApiConfig,
  defaultEditingFewShotMessages: () => defaultEditingFewShotMessages,
  defaultEditingMakeSystemPrompt: () => defaultEditingMakeSystemPrompt
});
module.exports = __toCommonJS(editing_api_config_exports);
var import_runtime_client_gql = require("@copilotkit/runtime-client-gql");
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
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: "<TextBeforeCursor>This morning I woke up and went straight to the grocery store. </TextBeforeCursor>"
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: "<TextToEdit>While I was there I picked up some apples, oranges, and bananas. </TextToEdit>"
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: "<TextAfterCursor>The grocery store was having a sale on fruit, so I decided to stock up.</TextAfterCursor>"
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: "<EditingPrompt>I also bought a big watermelon</EditingPrompt>"
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.Assistant,
    content: "While I was there I picked up some apples, oranges, and bananas, and a big watermelon."
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: "<TextBeforeCursor>Yesterday, I spent the afternoon working on my new project.</TextBeforeCursor>"
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: "<TextToEdit>It's quite challenging and requires a lot of focus.</TextToEdit>"
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: "<TextAfterCursor>I'm really excited about the potential outcomes of this project.</TextAfterCursor>"
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.User,
    content: "<EditingPrompt>emphasize the complexity and my enthusiasm for the project</EditingPrompt>"
  }),
  new import_runtime_client_gql.TextMessage({
    role: import_runtime_client_gql.Role.Assistant,
    content: "It's a highly complex task that demands intense concentration, but I'm incredibly enthusiastic about the promising prospects of this project."
  })
];
var defaultEditingApiConfig = {
  makeSystemPrompt: defaultEditingMakeSystemPrompt,
  fewShotMessages: defaultEditingFewShotMessages,
  forwardedParams: void 0
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultEditingApiConfig,
  defaultEditingFewShotMessages,
  defaultEditingMakeSystemPrompt
});
//# sourceMappingURL=editing-api-config.js.map