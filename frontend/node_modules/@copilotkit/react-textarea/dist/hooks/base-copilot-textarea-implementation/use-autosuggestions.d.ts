import { AutosuggestionsBareFunction } from '../../types/base/autosuggestions-bare-function.js';
import { AutosuggestionState } from '../../types/base/autosuggestion-state.js';
import { EditorAutocompleteState } from '../../types/base/editor-autocomplete-state.js';
import '@copilotkit/react-core';
import 'slate';

interface UseAutosuggestionsResult {
    currentAutocompleteSuggestion: AutosuggestionState | null;
    onChangeHandler: (newEditorState: EditorAutocompleteState | null) => void;
    onKeyDownHandler: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    onTouchStartHandler: (event: React.TouchEvent<HTMLDivElement>) => void;
}
declare function useAutosuggestions(debounceTime: number, shouldAcceptAutosuggestionOnKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => boolean, shouldAcceptAutosuggestionOnTouch: (event: React.TouchEvent<HTMLDivElement>) => boolean, autosuggestionFunction: AutosuggestionsBareFunction, insertAutocompleteSuggestion: (suggestion: AutosuggestionState) => void, disableWhenEmpty: boolean, disabled: boolean): UseAutosuggestionsResult;

export { UseAutosuggestionsResult, useAutosuggestions };
