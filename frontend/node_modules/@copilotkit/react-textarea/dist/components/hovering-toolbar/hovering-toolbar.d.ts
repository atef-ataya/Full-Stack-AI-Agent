import * as react_jsx_runtime from 'react/jsx-runtime';
import { InsertionEditorApiConfig } from '../../types/base/autosuggestions-bare-function.js';
import '@copilotkit/react-core';

interface HoveringToolbarProps {
    apiConfig: InsertionEditorApiConfig;
    contextCategories: string[];
    hoverMenuClassname: string | undefined;
}
declare const HoveringToolbar: (props: HoveringToolbarProps) => react_jsx_runtime.JSX.Element | null;

export { HoveringToolbar, HoveringToolbarProps };
