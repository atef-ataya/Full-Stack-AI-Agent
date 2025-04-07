import { AutosuggestionsConfig } from './autosuggestions-config.js';
import './subtypes/make-system-prompt.js';
import { InsertionsApiConfig } from './insertions-api-config.js';
import { SuggestionsApiConfig } from './suggestions-api-config.js';
import '../base/base-autosuggestions-config.js';
import '../base/autosuggestions-bare-function.js';
import '@copilotkit/react-core';
import './editing-api-config.js';
import '@copilotkit/runtime-client-gql';

interface SuggestionsApiConfigUserSpecified extends Partial<SuggestionsApiConfig> {
}
interface InsertionsApiConfigUserSpecified extends Partial<InsertionsApiConfig> {
}
interface AutosuggestionsConfigUserSpecified extends Partial<Omit<AutosuggestionsConfig, "chatApiConfigs" | "textareaPurpose">> {
    textareaPurpose: string;
    chatApiConfigs: {
        suggestionsApiConfig?: SuggestionsApiConfigUserSpecified;
        insertionApiConfig?: InsertionsApiConfigUserSpecified;
    };
}

export { AutosuggestionsConfigUserSpecified, InsertionsApiConfigUserSpecified, SuggestionsApiConfigUserSpecified };
