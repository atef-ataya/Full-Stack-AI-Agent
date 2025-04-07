"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/manual-ui/chip-with-icon.tsx
var chip_with_icon_exports = {};
__export(chip_with_icon_exports, {
  ChipWithIcon: () => ChipWithIcon
});
module.exports = __toCommonJS(chip_with_icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var ChipWithIcon = ({ label, onDelete, iconUrl }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "inline-flex items-center px-3 py-1 rounded-full bg-slate-200 text-sm font-medium text-white", children: [
    iconUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: iconUrl, alt: "icon", className: "w-4 h-4 rounded-full mr-2" }),
    label,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "ml-2 text-white hover:text-gray-200 focus:outline-none", onClick: onDelete, children: "x" })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChipWithIcon
});
//# sourceMappingURL=chip-with-icon.js.map