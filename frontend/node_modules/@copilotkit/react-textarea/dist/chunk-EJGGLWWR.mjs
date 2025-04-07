// src/types/autosuggestions-config/editing-api-config.tsx
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";
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
  new TextMessage({
    role: Role.User,
    content: "<TextBeforeCursor>This morning I woke up and went straight to the grocery store. </TextBeforeCursor>"
  }),
  new TextMessage({
    role: Role.User,
    content: "<TextToEdit>While I was there I picked up some apples, oranges, and bananas. </TextToEdit>"
  }),
  new TextMessage({
    role: Role.User,
    content: "<TextAfterCursor>The grocery store was having a sale on fruit, so I decided to stock up.</TextAfterCursor>"
  }),
  new TextMessage({
    role: Role.User,
    content: "<EditingPrompt>I also bought a big watermelon</EditingPrompt>"
  }),
  new TextMessage({
    role: Role.Assistant,
    content: "While I was there I picked up some apples, oranges, and bananas, and a big watermelon."
  }),
  new TextMessage({
    role: Role.User,
    content: "<TextBeforeCursor>Yesterday, I spent the afternoon working on my new project.</TextBeforeCursor>"
  }),
  new TextMessage({
    role: Role.User,
    content: "<TextToEdit>It's quite challenging and requires a lot of focus.</TextToEdit>"
  }),
  new TextMessage({
    role: Role.User,
    content: "<TextAfterCursor>I'm really excited about the potential outcomes of this project.</TextAfterCursor>"
  }),
  new TextMessage({
    role: Role.User,
    content: "<EditingPrompt>emphasize the complexity and my enthusiasm for the project</EditingPrompt>"
  }),
  new TextMessage({
    role: Role.Assistant,
    content: "It's a highly complex task that demands intense concentration, but I'm incredibly enthusiastic about the promising prospects of this project."
  })
];
var defaultEditingApiConfig = {
  makeSystemPrompt: defaultEditingMakeSystemPrompt,
  fewShotMessages: defaultEditingFewShotMessages,
  forwardedParams: void 0
};

export {
  defaultEditingMakeSystemPrompt,
  defaultEditingFewShotMessages,
  defaultEditingApiConfig
};
//# sourceMappingURL=chunk-EJGGLWWR.mjs.map