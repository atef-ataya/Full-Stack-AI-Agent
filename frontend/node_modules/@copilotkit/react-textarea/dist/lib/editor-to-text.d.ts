import { BaseEditor } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';

declare const editorToText: (editor: BaseEditor & ReactEditor & HistoryEditor) => string;

export { editorToText };
