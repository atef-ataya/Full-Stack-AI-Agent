import React__default from 'react';
import { BaseCopilotTextareaProps } from '../../types/base/index.js';
import '../../types/base/base-autosuggestions-config.js';
import '../../types/base/autosuggestions-bare-function.js';
import '@copilotkit/react-core';

/**
 * Purpose: to be used as the `ref` type for `CopilotTextarea` and `BaseCopilotTextarea`.
 *
 * This interface extends `HTMLElement`, and is the subset of `HTMLTextAreaElement` that "actually matters".
 * It provides the core functionality that consumers of `HTMLTextAreaElement` need 99.9% of the time:
 * - `value`: the current value of the textarea
 * - `focus`: make the textarea focused
 * - `blur`: make the textarea unfocused
 */
interface HTMLCopilotTextAreaElement extends HTMLElement {
    /**
     * The current value of the textarea.
     */
    value: string;
    /**
     * focus on the textarea
     */
    focus: () => void;
    /**
     * unfocus the textarea.
     *
     * Called `blur` for syntactic compatibility with `HTMLTextAreaElement`.
     */
    blur: () => void;
}
/**
 * Not intended for direct use. Use CopilotTextarea instead.
 *
 * The `BaseCopilotTextarea` includes the basic UX component,
 * without the business logic / AI logic that makes the content useful and coherent.
 *
 * It is useful if you want to build your own backend, with fully custom business logic
 * for figuring out which contnet to fill in.
 */
declare const BaseCopilotTextarea: React__default.ForwardRefExoticComponent<BaseCopilotTextareaProps & React__default.RefAttributes<HTMLCopilotTextAreaElement>>;

export { BaseCopilotTextarea, HTMLCopilotTextAreaElement };
