import { RefObject } from 'react';

declare const useAutosizeTextArea: (textAreaRef: RefObject<HTMLTextAreaElement>, value: string) => void;

export { useAutosizeTextArea as default };
