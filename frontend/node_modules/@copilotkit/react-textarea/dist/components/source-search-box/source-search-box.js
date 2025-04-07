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

// src/components/source-search-box/source-search-box.tsx
var source_search_box_exports = {};
__export(source_search_box_exports, {
  Logo: () => Logo,
  SourceSearchBox: () => SourceSearchBox
});
module.exports = __toCommonJS(source_search_box_exports);
var import_react = require("react");

// src/components/ui/command.tsx
var React = __toESM(require("react"));
var import_cmdk = require("cmdk");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/command.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Command = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command,
    __spreadValues({
      ref,
      className: cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      )
    }, props)
  );
});
Command.displayName = import_cmdk.Command.displayName;
var CommandInput = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Input,
    __spreadValues({
      ref,
      className: cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props)
  ) });
});
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandList = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.List,
    __spreadValues({
      ref,
      className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden pb-2", className)
    }, props)
  );
});
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_cmdk.Command.Empty, __spreadValues({ ref, className: "py-6 text-center text-sm" }, props)));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Group,
    __spreadValues({
      ref,
      className: cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )
    }, props)
  );
});
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparator = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 h-px bg-border", className)
    }, props)
  );
});
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItem = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props)
  );
});
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    __spreadValues({
      className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className)
    }, props)
  );
};
CommandShortcut.displayName = "CommandShortcut";

// src/components/source-search-box/source-search-box.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function SourceSearchBox(props) {
  const [selectedValue, setSelectedValue] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    Command,
    {
      className: "rounded-lg border shadow-md",
      value: selectedValue,
      onValueChange: (value) => {
        setSelectedValue(value);
      },
      filter: (value, search) => {
        if (props.searchTerm === "")
          return 1;
        if (value.startsWith(props.searchTerm))
          return 1;
        return 0;
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          CommandInput,
          {
            value: props.searchTerm,
            className: "rounded-t-lg hidden",
            placeholder: "Search for a command..."
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(CommandList, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CommandEmpty, { children: "No results found." }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CommandGroup, { heading: "Available resources", children: props.suggestedFiles.map((filePointer) => {
            return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              CommandItem,
              {
                value: filePointer.name,
                onSelect: (value) => {
                  props.onSelectedFile(filePointer);
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: " px-3  flex flex-row gap-1 items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Logo, { width: "20px", height: "20px", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "img",
                    {
                      src: filePointer.iconImageUri,
                      alt: filePointer.sourceApplication,
                      className: "w-full h-full"
                    }
                  ) }),
                  filePointer.name
                ] })
              },
              `word-${filePointer.sourceApplication}.${filePointer.name}`
            );
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CommandSeparator, {})
        ] })
      ]
    }
  );
}
function Logo({
  children,
  width,
  height
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex items-center justify-center", style: { width, height }, children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Logo,
  SourceSearchBox
});
//# sourceMappingURL=source-search-box.js.map