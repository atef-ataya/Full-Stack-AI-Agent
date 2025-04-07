import { Message } from '@copilotkit/runtime-client-gql';
import { MakeSystemPrompt } from './subtypes/make-system-prompt.js';

interface InsertionsApiConfig {
    makeSystemPrompt: MakeSystemPrompt;
    fewShotMessages: Message[];
    forwardedParams: {
        [key: string]: any;
    } | undefined;
}
declare const defaultInsertionsMakeSystemPrompt: MakeSystemPrompt;
declare const defaultInsertionsFewShotMessages: Message[];
declare const defaultInsertionsApiConfig: InsertionsApiConfig;

export { InsertionsApiConfig, defaultInsertionsApiConfig, defaultInsertionsFewShotMessages, defaultInsertionsMakeSystemPrompt };
