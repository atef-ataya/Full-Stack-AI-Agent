import { BaseRange, Editor, Range } from 'slate';
import { EditorAutocompleteState } from '../types/base/editor-autocomplete-state.js';

interface EditorTextState {
    selection: BaseRange;
    textBeforeCursor: string;
    selectedText: string;
    textAfterCursor: string;
}
declare function getTextAroundCollapsedCursor(editor: Editor): EditorAutocompleteState | null;
declare function getTextAroundSelection(editor: Editor): EditorTextState | null;
declare function getFullEditorTextWithNewlines(editor: Editor): string;
declare function extractTextWithNewlines(editor: Editor, range: Range): string;

export { EditorTextState, extractTextWithNewlines, getFullEditorTextWithNewlines, getTextAroundCollapsedCursor, getTextAroundSelection };
