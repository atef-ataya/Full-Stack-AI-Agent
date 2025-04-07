import * as react_jsx_runtime from 'react/jsx-runtime';
import { EditingEditorState, InsertionEditorApiConfig } from '../../../types/base/autosuggestions-bare-function.js';
import '@copilotkit/react-core';

interface Props {
    editorState: EditingEditorState;
    apiConfig: InsertionEditorApiConfig;
    performInsertion: (insertedText: string) => void;
    closeWindow: () => void;
    contextCategories: string[];
}
declare const HoveringInsertionPromptBox: (props: Props) => react_jsx_runtime.JSX.Element;

export { HoveringInsertionPromptBox, Props };
