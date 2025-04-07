import {
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/base-copilot-textarea/render-element.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function makeRenderElementFunction(suggestionsStyle) {
  return (props) => {
    switch (props.element.type) {
      case "paragraph":
        return /* @__PURE__ */ jsx(DefaultElement, __spreadValues({}, props));
      case "suggestion":
        return /* @__PURE__ */ jsx(SuggestionElement, __spreadProps(__spreadValues({}, props), { suggestionsStyle }));
    }
  };
}
var DefaultElement = (props) => {
  return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({}, props.attributes), { children: props.children }));
};
var SuggestionElement = (props) => {
  return /* @__PURE__ */ jsxs(
    "span",
    __spreadProps(__spreadValues({}, props.attributes), {
      style: __spreadValues({}, props.suggestionsStyle),
      "data-testid": "suggestion",
      contentEditable: false,
      children: [
        props.children,
        props.element.type === "suggestion" && props.element.content
      ]
    })
  );
};

export {
  makeRenderElementFunction
};
//# sourceMappingURL=chunk-7L6GIHDM.mjs.map