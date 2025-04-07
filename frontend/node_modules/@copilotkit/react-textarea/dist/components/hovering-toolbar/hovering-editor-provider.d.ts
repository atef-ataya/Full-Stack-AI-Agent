import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface HoveringEditorContextProps {
    isDisplayed: boolean;
    setIsDisplayed: (value: boolean) => void;
}
interface HoveringEditorProviderProps {
    children: ReactNode;
}
/**
 * A context provider for the hovering editor over the `CopilotTextarea`
 * (used to edit and insert text into the `CopilotTextarea`).
 */
declare const HoveringEditorProvider: ({ children }: HoveringEditorProviderProps) => react_jsx_runtime.JSX.Element;
declare const useHoveringEditorContext: () => HoveringEditorContextProps;

export { HoveringEditorProvider, HoveringEditorProviderProps, useHoveringEditorContext };
