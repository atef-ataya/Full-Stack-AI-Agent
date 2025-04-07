import { BaseAutosuggestionsConfig } from '../base/base-autosuggestions-config.js';
import { SuggestionsApiConfig } from './suggestions-api-config.js';
import { InsertionsApiConfig } from './insertions-api-config.js';
import { EditingApiConfig } from './editing-api-config.js';
import '../base/autosuggestions-bare-function.js';
import '@copilotkit/react-core';
import '@copilotkit/runtime-client-gql';
import './subtypes/make-system-prompt.js';

interface AutosuggestionsConfig extends Omit<BaseAutosuggestionsConfig, "apiConfig"> {
    contextCategories: string[];
    chatApiConfigs: {
        suggestionsApiConfig: SuggestionsApiConfig;
        insertionApiConfig: InsertionsApiConfig;
        editingApiConfig: EditingApiConfig;
    };
}
declare const defaultAutosuggestionsConfig: Omit<AutosuggestionsConfig, "textareaPurpose" | "apiEndpoint">;

export { AutosuggestionsConfig, defaultAutosuggestionsConfig };
