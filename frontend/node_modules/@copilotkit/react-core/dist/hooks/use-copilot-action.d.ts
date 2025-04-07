import { Parameter } from '@copilotkit/shared';
import { FrontendAction, CatchAllFrontendAction } from '../types/frontend-action.js';
import '@copilotkit/runtime-client-gql';
import 'react';

/**
 * Example usage of useCopilotAction with complex parameters:
 *
 * @example
 * useCopilotAction({
 *   name: "myAction",
 *   parameters: [
 *     { name: "arg1", type: "string", enum: ["option1", "option2", "option3"], required: false },
 *     { name: "arg2", type: "number" },
 *     {
 *       name: "arg3",
 *       type: "object",
 *       attributes: [
 *         { name: "nestedArg1", type: "boolean" },
 *         { name: "xyz", required: false },
 *       ],
 *     },
 *     { name: "arg4", type: "number[]" },
 *   ],
 *   handler: ({ arg1, arg2, arg3, arg4 }) => {
 *     const x = arg3.nestedArg1;
 *     const z = arg3.xyz;
 *     console.log(arg1, arg2, arg3);
 *   },
 * });
 *
 * @example
 * // Simple action without parameters
 * useCopilotAction({
 *   name: "myAction",
 *   handler: () => {
 *     console.log("No parameters provided.");
 *   },
 * });
 *
 * @example
 * // Interactive action with UI rendering and response handling
 * useCopilotAction({
 *   name: "handleMeeting",
 *   description: "Handle a meeting by booking or canceling",
 *   parameters: [
 *     {
 *       name: "meeting",
 *       type: "string",
 *       description: "The meeting to handle",
 *       required: true,
 *     },
 *     {
 *       name: "date",
 *       type: "string",
 *       description: "The date of the meeting",
 *       required: true,
 *     },
 *     {
 *       name: "title",
 *       type: "string",
 *       description: "The title of the meeting",
 *       required: true,
 *     },
 *   ],
 *   renderAndWaitForResponse: ({ args, respond, status }) => {
 *     const { meeting, date, title } = args;
 *     return (
 *       <MeetingConfirmationDialog
 *         meeting={meeting}
 *         date={date}
 *         title={title}
 *         onConfirm={() => respond('meeting confirmed')}
 *         onCancel={() => respond('meeting canceled')}
 *       />
 *     );
 *   },
 * });
 *
 * @example
 * // Catch all action allows you to render actions that are not defined in the frontend
 * useCopilotAction({
 *   name: "*",
 *   render: ({ name, args, status, result, handler, respond }) => {
 *     return <div>Rendering action: {name}</div>;
 *   },
 * });
 */
/**
 * <img src="/images/use-copilot-action/useCopilotAction.gif" width="500" />
 * `useCopilotAction` is a React hook that you can use in your application to provide
 * custom actions that can be called by the AI. Essentially, it allows the Copilot to
 * execute these actions contextually during a chat, based on the user's interactions
 * and needs.
 *
 * Here's how it works:
 *
 * Use `useCopilotAction` to set up actions that the Copilot can call. To provide
 * more context to the Copilot, you can provide it with a `description` (for example to explain
 * what the action does, under which conditions it can be called, etc.).
 *
 * Then you define the parameters of the action, which can be simple, e.g. primitives like strings or numbers,
 * or complex, e.g. objects or arrays.
 *
 * Finally, you provide a `handler` function that receives the parameters and returns a result.
 * CopilotKit takes care of automatically inferring the parameter types, so you get type safety
 * and autocompletion for free.
 *
 * To render a custom UI for the action, you can provide a `render()` function. This function
 * lets you render a custom component or return a string to display.
 *
 * ## Usage
 *
 * ### Simple Usage
 *
 * ```tsx
 * useCopilotAction({
 *   name: "sayHello",
 *   description: "Say hello to someone.",
 *   parameters: [
 *     {
 *       name: "name",
 *       type: "string",
 *       description: "name of the person to say greet",
 *     },
 *   ],
 *   handler: async ({ name }) => {
 *     alert(`Hello, ${name}!`);
 *   },
 * });
 * ```
 *
 * ## Generative UI
 *
 * This hooks enables you to dynamically generate UI elements and render them in the copilot chat. For more information, check out the [Generative UI](/guides/generative-ui) page.
 */

declare function useCopilotAction<const T extends Parameter[] | [] = []>(action: FrontendAction<T> | CatchAllFrontendAction, dependencies?: any[]): void;

export { useCopilotAction };
