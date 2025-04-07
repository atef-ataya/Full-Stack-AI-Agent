import {
  retry
} from "./chunk-KNQIEOFP.mjs";
import {
  __async,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/hooks/make-autosuggestions-function/use-make-standard-autosuggestions-function.tsx
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
function useMakeStandardAutosuggestionFunction(textareaPurpose, contextCategories, apiConfig) {
  const { getContextString, copilotApiConfig, runtimeClient } = useCopilotContext();
  const { chatApiEndpoint: url, publicApiKey, credentials, properties } = copilotApiConfig;
  const headers = __spreadValues(__spreadValues({}, copilotApiConfig.headers), publicApiKey ? { [COPILOT_CLOUD_PUBLIC_API_KEY_HEADER]: publicApiKey } : {});
  const { maxTokens, stop, temperature = 0 } = apiConfig;
  return useCallback(
    (editorState, abortSignal) => __async(this, null, function* () {
      const res = yield retry(() => __async(this, null, function* () {
        var _a, _b, _c;
        const messages = [
          new TextMessage({
            role: Role.System,
            content: apiConfig.makeSystemPrompt(
              textareaPurpose,
              getContextString([], contextCategories)
            )
          }),
          ...apiConfig.fewShotMessages,
          editorState.textAfterCursor != "" ? new TextMessage({
            role: Role.User,
            content: editorState.textAfterCursor
          }) : null,
          new TextMessage({
            role: Role.User,
            content: `<TextAfterCursor>${editorState.textAfterCursor}</TextAfterCursor>`
          }),
          new TextMessage({
            role: Role.User,
            content: `<TextBeforeCursor>${editorState.textBeforeCursor}</TextBeforeCursor>`
          })
        ].filter(Boolean);
        const response = yield runtimeClient.generateCopilotResponse({
          data: {
            frontend: {
              actions: [],
              url: window.location.href
            },
            messages: convertMessagesToGqlInput(filterAgentStateMessages(messages)),
            metadata: {
              requestType: CopilotRequestType.TextareaCompletion
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
        for (const message of convertGqlOutputToMessages(
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

export {
  useMakeStandardAutosuggestionFunction
};
//# sourceMappingURL=chunk-F6GMWOLE.mjs.map