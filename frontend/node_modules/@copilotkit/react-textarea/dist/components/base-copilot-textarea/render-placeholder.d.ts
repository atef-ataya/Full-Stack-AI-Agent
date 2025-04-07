import { RenderPlaceholderProps } from 'slate-react';

type RenderPlaceholderFunction = (props: RenderPlaceholderProps) => JSX.Element;
declare function makeRenderPlaceholderFunction(placeholderStyle?: React.CSSProperties): RenderPlaceholderFunction;

export { RenderPlaceholderFunction, makeRenderPlaceholderFunction };
