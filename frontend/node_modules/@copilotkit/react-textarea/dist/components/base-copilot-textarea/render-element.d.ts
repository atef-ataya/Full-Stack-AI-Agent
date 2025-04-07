import { RenderElementProps } from 'slate-react';

type RenderElementFunction = (props: RenderElementProps) => JSX.Element;
declare function makeRenderElementFunction(suggestionsStyle: React.CSSProperties): RenderElementFunction;

export { RenderElementFunction, makeRenderElementFunction };
