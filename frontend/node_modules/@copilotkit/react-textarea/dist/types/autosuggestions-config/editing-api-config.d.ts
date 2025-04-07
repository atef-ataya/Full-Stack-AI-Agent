import { Message } from '@copilotkit/runtime-client-gql';
import { MakeSystemPrompt } from './subtypes/make-system-prompt.js';

interface EditingApiConfig {
    makeSystemPrompt: MakeSystemPrompt;
    fewShotMessages: Message[];
    forwardedParams: {
        [key: string]: any;
    } | undefined;
}
declare const defaultEditingMakeSystemPrompt: MakeSystemPrompt;
declare const defaultEditingFewShotMessages: Message[];
declare const defaultEditingApiConfig: EditingApiConfig;

export { EditingApiConfig, defaultEditingApiConfig, defaultEditingFewShotMessages, defaultEditingMakeSystemPrompt };
