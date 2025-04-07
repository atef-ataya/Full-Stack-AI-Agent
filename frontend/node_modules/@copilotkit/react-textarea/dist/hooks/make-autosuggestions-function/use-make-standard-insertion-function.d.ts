import { Generator_InsertionOrEditingSuggestion } from '../../types/base/autosuggestions-bare-function.js';
import { InsertionsApiConfig } from '../../types/autosuggestions-config/insertions-api-config.js';
import { EditingApiConfig } from '../../types/autosuggestions-config/editing-api-config.js';
import '@copilotkit/react-core';
import '@copilotkit/runtime-client-gql';
import '../../types/autosuggestions-config/subtypes/make-system-prompt.js';

/**
 * Returns a memoized function that sends a request to the specified API endpoint to get an autosuggestion for the user's input.
 * The function takes in the text before and after the cursor, and an abort signal.
 * It sends a POST request to the API endpoint with the messages array containing the system message, few shot messages, and user messages.
 * The function returns the suggestion from the API response.
 *
 * @param textareaPurpose - The purpose of the textarea. This is included in the system message.
 * @param apiEndpoint - The API endpoint to send the autosuggestion request to.
 * @param makeSystemMessage - A function that takes in a context string and returns a system message to include in the autosuggestion request.
 * @param fewShotMessages - An array of few shot messages to include in the autosuggestion request.
 * @param contextCategories - The categories of context strings we want to include. By default, we include the (default) "global" context category.
 * @returns A memoized function that sends a request to the specified API endpoint to get an autosuggestion for the user's input.
 */
declare function useMakeStandardInsertionOrEditingFunction(textareaPurpose: string, contextCategories: string[], insertionApiConfig: InsertionsApiConfig, editingApiConfig: EditingApiConfig): Generator_InsertionOrEditingSuggestion;

export { useMakeStandardInsertionOrEditingFunction };
