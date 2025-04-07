import { BasePoint } from 'slate';

interface EditorAutocompleteState {
    cursorPoint: BasePoint;
    textBeforeCursor: string;
    textAfterCursor: string;
}
declare function areEqual_autocompleteState(prev: EditorAutocompleteState, next: EditorAutocompleteState): boolean;

export { EditorAutocompleteState, areEqual_autocompleteState };
