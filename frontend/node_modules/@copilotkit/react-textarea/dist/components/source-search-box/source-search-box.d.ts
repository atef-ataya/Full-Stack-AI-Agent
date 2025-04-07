import * as react_jsx_runtime from 'react/jsx-runtime';
import { DocumentPointer } from '@copilotkit/react-core';

interface SourceSearchBoxProps {
    searchTerm: string;
    suggestedFiles: DocumentPointer[];
    onSelectedFile: (filePointer: DocumentPointer) => void;
}
declare function SourceSearchBox(props: SourceSearchBoxProps): react_jsx_runtime.JSX.Element;
declare function Logo({ children, width, height, }: {
    children: React.ReactNode;
    width: string;
    height: string;
}): react_jsx_runtime.JSX.Element;

export { Logo, SourceSearchBox, SourceSearchBoxProps };
