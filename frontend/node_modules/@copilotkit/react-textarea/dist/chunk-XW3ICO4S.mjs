import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/base-copilot-textarea/render-placeholder.tsx
import { jsx } from "react/jsx-runtime";
function makeRenderPlaceholderFunction(placeholderStyle) {
  return (props) => {
    const _a = props.attributes, { style } = _a, restAttributes = __objRest(_a, ["style"]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({}, restAttributes), {
        style: __spreadValues(__spreadValues({}, style), placeholderStyle),
        children: props.children
      })
    );
  };
}

export {
  makeRenderPlaceholderFunction
};
//# sourceMappingURL=chunk-XW3ICO4S.mjs.map