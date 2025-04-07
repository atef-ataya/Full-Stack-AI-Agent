import * as react_jsx_runtime from 'react/jsx-runtime';
import { EditingEditorState, Generator_InsertionOrEditingSuggestion } from '../../../types/base/autosuggestions-bare-function.js';
import '@copilotkit/react-core';

type SuggestionState = {
    editorState: EditingEditorState;
};
interface HoveringInsertionPromptBoxCoreProps {
    state: SuggestionState;
    performInsertion: (insertedText: string) => void;
    insertionOrEditingFunction: Generator_InsertionOrEditingSuggestion;
    contextCategories: string[];
}
declare const HoveringInsertionPromptBoxCore: ({ performInsertion, state, insertionOrEditingFunction, contextCategories, }: HoveringInsertionPromptBoxCoreProps) => react_jsx_runtime.JSX.Element;

export { HoveringInsertionPromptBoxCore, HoveringInsertionPromptBoxCoreProps, SuggestionState };
