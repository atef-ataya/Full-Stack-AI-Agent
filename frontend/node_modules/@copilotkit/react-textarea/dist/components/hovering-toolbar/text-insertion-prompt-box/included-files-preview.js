"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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

// src/components/hovering-toolbar/text-insertion-prompt-box/included-files-preview.tsx
var included_files_preview_exports = {};
__export(included_files_preview_exports, {
  FileChipPreview: () => FileChipPreview,
  IncludedFilesPreview: () => IncludedFilesPreview
});
module.exports = __toCommonJS(included_files_preview_exports);

// src/components/ui/label.tsx
var React = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/label.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelPrimitive.Root, __spreadValues({ ref, className: cn(labelVariants(), className) }, props));
});
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/hovering-toolbar/text-insertion-prompt-box/included-files-preview.tsx
var import_Chip = __toESM(require("@mui/material/Chip/Chip.js"));
var import_Avatar = __toESM(require("@mui/material/Avatar/Avatar.js"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var IncludedFilesPreview = ({
  includedFiles,
  setIncludedFiles
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col gap-2 mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Label, { className: "", children: "Included context:" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex flex-wrap gap-2", children: includedFiles.map((filePointer, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        FileChipPreview,
        {
          filePointer,
          onDelete: () => {
            setIncludedFiles((prev) => prev.filter((fp) => fp !== filePointer));
          }
        },
        `file-${filePointer.sourceApplication}.${filePointer.name}`
      );
    }) })
  ] });
};
var FileChipPreview = ({ filePointer, onDelete }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_Chip.default,
    {
      label: filePointer.name,
      onDelete,
      avatar: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_Avatar.default,
        {
          src: filePointer.iconImageUri,
          alt: filePointer.sourceApplication,
          sx: { backgroundColor: "transparent" }
        }
      )
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileChipPreview,
  IncludedFilesPreview
});
//# sourceMappingURL=included-files-preview.js.map