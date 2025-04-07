import { CustomEditor } from '../../types/base/custom-editor.js';
import 'slate';
import 'slate-react';
import 'slate-history';

declare function clearAutocompletionsFromEditor(editor: CustomEditor): void;

export { clearAutocompletionsFromEditor };
