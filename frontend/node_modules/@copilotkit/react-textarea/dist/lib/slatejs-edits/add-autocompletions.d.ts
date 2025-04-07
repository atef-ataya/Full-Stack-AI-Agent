import { BasePoint } from 'slate';
import { CustomEditor } from '../../types/base/custom-editor.js';
import 'slate-react';
import 'slate-history';

declare function addAutocompletionsToEditor(editor: CustomEditor, newSuggestion: string, point: BasePoint): void;

export { addAutocompletionsToEditor };
