import {
  retry
} from "./chunk-KNQIEOFP.mjs";
import {
  __async,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/hooks/make-autosuggestions-function/use-make-standard-insertion-function.tsx
import { COPILOT_CLOUD_PUBLIC_API_KEY_HEADER } from "@copilotkit/shared";
import { useCopilotContext } from "@copilotkit/react-core";
import { useCallback } from "react";
import {
  Role,
  TextMessage,
  convertGqlOutputToMessages,
  convertMessagesToGqlInput,
  filterAgentStateMessages,
  CopilotRequestType
} from "@copilotkit/runtime-client-gql";
function useMakeStandardInsertionOrEditingFunction(textareaPurpose, contextCategories, insertionApiConfig, editingApiConfig) {
  const { getContextString, copilotApiConfig, runtimeClient } = useCopilotContext();
  const headers = __spreadValues({}, copilotApiConfig.publicApiKey ? { [COPILOT_CLOUD_PUBLIC_API_KEY_HEADER]: copilotApiConfig.publicApiKey } : {});
  function runtimeClientResponseToStringStream(responsePromise) {
    return __async(this, null, function* () {
      const messagesStream = runtimeClient.asStream(responsePromise);
      return new ReadableStream({
        start(controller) {
          return __async(this, null, function* () {
            const reader = messagesStream.getReader();
            let sentContent = "";
            while (true) {
              const { done, value } = yield reader.read();
              if (done) {
                break;
              }
              const messages = convertGqlOutputToMessages(value.generateCopilotResponse.messages);
              let newContent = "";
              for (const message of messages) {
                if (message.isTextMessage()) {
                  newContent += message.content;
                }
              }
              if (newContent) {
                const contentToSend = newContent.slice(sentContent.length);
                controller.enqueue(contentToSend);
                sentContent += contentToSend;
              }
            }
            controller.close();
          });
        }
      });
    });
  }
  const insertionFunction = useCallback(
    (editorState, insertionPrompt, documents, abortSignal) => __async(this, null, function* () {
      const res = yield retry(() => __async(this, null, function* () {
        const messages = [
          new TextMessage({
            role: Role.System,
            content: insertionApiConfig.makeSystemPrompt(
              textareaPurpose,
              getContextString(documents, contextCategories)
            )
          }),
          ...insertionApiConfig.fewShotMessages,
          new TextMessage({
            role: Role.User,
            content: `<TextAfterCursor>${editorState.textAfterCursor}</TextAfterCursor>`
          }),
          new TextMessage({
            role: Role.User,
            content: `<TextBeforeCursor>${editorState.textBeforeCursor}</TextBeforeCursor>`
          }),
          new TextMessage({
            role: Role.User,
            content: `<InsertionPrompt>${insertionPrompt}</InsertionPrompt>`
          })
        ];
        return runtimeClientResponseToStringStream(
          runtimeClient.generateCopilotResponse({
            data: {
              frontend: {
                actions: [],
                url: window.location.href
              },
              messages: convertMessagesToGqlInput(filterAgentStateMessages(messages)),
              metadata: {
                requestType: CopilotRequestType.TextareaCompletion
              }
            },
            properties: copilotApiConfig.properties,
            signal: abortSignal
          })
        );
      }));
      return res;
    }),
    [insertionApiConfig, getContextString, contextCategories, textareaPurpose]
  );
  const editingFunction = useCallback(
    (editorState, editingPrompt, documents, abortSignal) => __async(this, null, function* () {
      const res = yield retry(() => __async(this, null, function* () {
        const messages = [
          new TextMessage({
            role: Role.System,
            content: editingApiConfig.makeSystemPrompt(
              textareaPurpose,
              getContextString(documents, contextCategories)
            )
          }),
          ...editingApiConfig.fewShotMessages,
          new TextMessage({
            role: Role.User,
            content: `<TextBeforeCursor>${editorState.textBeforeCursor}</TextBeforeCursor>`
          }),
          new TextMessage({
            role: Role.User,
            content: `<TextToEdit>${editorState.selectedText}</TextToEdit>`
          }),
          new TextMessage({
            role: Role.User,
            content: `<TextAfterCursor>${editorState.textAfterCursor}</TextAfterCursor>`
          }),
          new TextMessage({
            role: Role.User,
            content: `<EditingPrompt>${editingPrompt}</EditingPrompt>`
          })
        ];
        return runtimeClientResponseToStringStream(
          runtimeClient.generateCopilotResponse({
            data: {
              frontend: {
                actions: [],
                url: window.location.href
              },
              messages: convertMessagesToGqlInput(filterAgentStateMessages(messages)),
              metadata: {
                requestType: CopilotRequestType.TextareaCompletion
              }
            },
            properties: copilotApiConfig.properties,
            signal: abortSignal
          })
        );
      }));
      return res;
    }),
    [editingApiConfig, getContextString, contextCategories, textareaPurpose]
  );
  const insertionOrEditingFunction = useCallback(
    (editorState, insertionPrompt, documents, abortSignal) => __async(this, null, function* () {
      if (editorState.selectedText === "") {
        return yield insertionFunction(editorState, insertionPrompt, documents, abortSignal);
      } else {
        return yield editingFunction(editorState, insertionPrompt, documents, abortSignal);
      }
    }),
    [insertionFunction, editingFunction]
  );
  return insertionOrEditingFunction;
}

export {
  useMakeStandardInsertionOrEditingFunction
};
//# sourceMappingURL=chunk-RXV67GJN.mjs.map