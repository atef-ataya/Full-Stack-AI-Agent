import { Operation, Editor } from 'slate';
import { HistoryEditor } from 'slate-history';

type ShouldSaveToHistory = (op: Operation, prev: Operation | undefined) => boolean;
declare const withPartialHistory: <T extends Editor>(editor: T, shouldSave: ShouldSaveToHistory) => T & HistoryEditor;
declare const defaultShouldSave: (op: Operation, prev: Operation | undefined) => boolean;

export { ShouldSaveToHistory, defaultShouldSave, withPartialHistory };
