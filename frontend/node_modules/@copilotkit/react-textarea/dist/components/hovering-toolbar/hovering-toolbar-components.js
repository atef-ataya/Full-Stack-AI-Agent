"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/hovering-toolbar/hovering-toolbar-components.tsx
var hovering_toolbar_components_exports = {};
__export(hovering_toolbar_components_exports, {
  Button: () => Button,
  Icon: () => Icon,
  Menu: () => Menu,
  Portal: () => Portal,
  Toolbar: () => Toolbar
});
module.exports = __toCommonJS(hovering_toolbar_components_exports);
var import_css = require("@emotion/css");
var import_react = __toESM(require("react"));
var import_react_dom = __toESM(require("react-dom"));
var import_jsx_runtime = require("react/jsx-runtime");
var Button = import_react.default.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      __spreadProps(__spreadValues({}, props), {
        ref,
        className: (0, import_css.cx)(
          className,
          import_css.css`
          cursor: pointer;
          color: ${reversed ? active ? "white" : "#aaa" : active ? "black" : "#ccc"};
        `
        )
      })
    );
  }
);
var Icon = import_react.default.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      __spreadProps(__spreadValues({}, props), {
        ref,
        className: (0, import_css.cx)(
          "material-icons",
          className,
          import_css.css`
          font-size: 18px;
          vertical-align: text-bottom;
        `
        )
      })
    );
  }
);
var Menu = import_react.default.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      __spreadProps(__spreadValues({}, props), {
        "data-testid": "menu",
        ref,
        className: (0, import_css.cx)(
          className,
          import_css.css`
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
  return typeof document === "object" ? import_react_dom.default.createPortal(children, document.body) : null;
};
var Toolbar = import_react.default.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Menu,
      __spreadProps(__spreadValues({}, props), {
        ref,
        className: (0, import_css.cx)(
          className,
          import_css.css`
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Icon,
  Menu,
  Portal,
  Toolbar
});
//# sourceMappingURL=hovering-toolbar-components.js.map