import * as react_jsx_runtime from 'react/jsx-runtime';
import { DocumentPointer } from '@copilotkit/react-core';
import React__default from 'react';

interface IncludedFilesPreviewProps {
    includedFiles: DocumentPointer[];
    setIncludedFiles: React__default.Dispatch<React__default.SetStateAction<DocumentPointer[]>>;
}
declare const IncludedFilesPreview: ({ includedFiles, setIncludedFiles, }: IncludedFilesPreviewProps) => react_jsx_runtime.JSX.Element;
interface FileChipPreviewProps {
    filePointer: DocumentPointer;
    onDelete: () => void;
}
declare const FileChipPreview: ({ filePointer, onDelete }: FileChipPreviewProps) => react_jsx_runtime.JSX.Element;

export { FileChipPreview, FileChipPreviewProps, IncludedFilesPreview, IncludedFilesPreviewProps };
