import { Message } from '@copilotkit/runtime-client-gql';
import React from 'react';

/**
 * An internal context to separate the messages state (which is constantly changing) from the rest of CopilotKit context
 */

interface CopilotMessagesContextParams {
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}
declare const CopilotMessagesContext: React.Context<CopilotMessagesContextParams>;
declare function useCopilotMessagesContext(): CopilotMessagesContextParams;

export { CopilotMessagesContext, CopilotMessagesContextParams, useCopilotMessagesContext };
