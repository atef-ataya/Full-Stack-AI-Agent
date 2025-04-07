import { Message } from '@copilotkit/runtime-client-gql';
import { MakeSystemPrompt } from './subtypes/make-system-prompt.js';

interface SuggestionsApiConfig {
    makeSystemPrompt: MakeSystemPrompt;
    fewShotMessages: Message[];
    maxTokens?: number;
    stop?: string[];
    temperature?: number;
}
declare const defaultSuggestionsMakeSystemPrompt: MakeSystemPrompt;
declare const defaultSuggestionsFewShotMessages: Message[];
declare const defaultSuggestionsApiConfig: SuggestionsApiConfig;

export { SuggestionsApiConfig, defaultSuggestionsApiConfig, defaultSuggestionsFewShotMessages, defaultSuggestionsMakeSystemPrompt };
