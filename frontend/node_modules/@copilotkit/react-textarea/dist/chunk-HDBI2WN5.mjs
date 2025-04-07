import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/hovering-toolbar/hovering-toolbar-components.tsx
import { css, cx } from "@emotion/css";
import React from "react";
import ReactDOM from "react-dom";
import { jsx } from "react/jsx-runtime";
var Button = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      active,
      reversed
    } = _b, props = __objRest(_b, [
      "className",
      "active",
      "reversed"
    ]);
    return /* @__PURE__ */ jsx(
      "span",
      __spreadProps(__spreadValues({}, props), {
        ref,
        className: cx(
          className,
          css`
          cursor: pointer;
          color: ${reversed ? active ? "white" : "#aaa" : active ? "black" : "#ccc"};
        `
        )
      })
    );
  }
);
var Icon = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      "span",
      __spreadProps(__spreadValues({}, props), {
        ref,
        className: cx(
          "material-icons",
          className,
          css`
          font-size: 18px;
          vertical-align: text-bottom;
        `
        )
      })
    );
  }
);
var Menu = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({}, props), {
        "data-testid": "menu",
        ref,
        className: cx(
          className,
          css`
            & > * {
              display: inline-block;
            }

            & > * + * {
              margin-left: 15px;
            }
          `
        )
      })
    );
  }
);
var Portal = ({ children }) => {
  return typeof document === "object" ? ReactDOM.createPortal(children, document.body) : null;
};
var Toolbar = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      Menu,
      __spreadProps(__spreadValues({}, props), {
        ref,
        className: cx(
          className,
          css`
          position: relative;
          padding: 1px 18px 17px;
          margin: 0 -20px;
          border-bottom: 2px solid #eee;
          margin-bottom: 20px;
        `
        )
      })
    );
  }
);

export {
  Button,
  Icon,
  Menu,
  Portal,
  Toolbar
};
//# sourceMappingURL=chunk-HDBI2WN5.mjs.map