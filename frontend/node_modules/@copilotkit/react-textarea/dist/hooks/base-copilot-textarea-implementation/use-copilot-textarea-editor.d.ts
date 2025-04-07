import { CustomEditor } from '../../types/base/custom-editor.js';
import 'slate';
import 'slate-react';
import 'slate-history';

declare function useCopilotTextareaEditor(): CustomEditor;

export { useCopilotTextareaEditor };
