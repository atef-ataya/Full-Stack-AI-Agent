import { DocumentPointer } from '@copilotkit/react-core';

interface InsertionEditorState {
    textBeforeCursor: string;
    textAfterCursor: string;
}
interface EditingEditorState extends InsertionEditorState {
    selectedText: string;
}
type AutosuggestionsBareFunction = (editorState: InsertionEditorState, abortSignal: AbortSignal) => Promise<string>;
type Generator_InsertionOrEditingSuggestion = (editorState: EditingEditorState, prompt: string, documents: DocumentPointer[], abortSignal: AbortSignal) => Promise<ReadableStream<string>>;
interface InsertionEditorApiConfig {
    insertionOrEditingFunction: Generator_InsertionOrEditingSuggestion;
}
interface BaseCopilotTextareaApiConfig extends InsertionEditorApiConfig {
    autosuggestionsFunction: AutosuggestionsBareFunction;
}

export { AutosuggestionsBareFunction, BaseCopilotTextareaApiConfig, EditingEditorState, Generator_InsertionOrEditingSuggestion, InsertionEditorApiConfig, InsertionEditorState };
