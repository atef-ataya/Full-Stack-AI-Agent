import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "./chunk-VSVQZUPW.mjs";

// src/components/source-search-box/source-search-box.tsx
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function SourceSearchBox(props) {
  const [selectedValue, setSelectedValue] = useState("");
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx(
          CommandInput,
          {
            value: props.searchTerm,
            className: "rounded-t-lg hidden",
            placeholder: "Search for a command..."
          }
        ),
        /* @__PURE__ */ jsxs(CommandList, { children: [
          /* @__PURE__ */ jsx(CommandEmpty, { children: "No results found." }),
          /* @__PURE__ */ jsx(CommandGroup, { heading: "Available resources", children: props.suggestedFiles.map((filePointer) => {
            return /* @__PURE__ */ jsx(
              CommandItem,
              {
                value: filePointer.name,
                onSelect: (value) => {
                  props.onSelectedFile(filePointer);
                },
                children: /* @__PURE__ */ jsxs("div", { className: " px-3  flex flex-row gap-1 items-center", children: [
                  /* @__PURE__ */ jsx(Logo, { width: "20px", height: "20px", children: /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(CommandSeparator, {})
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
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", style: { width, height }, children });
}

export {
  SourceSearchBox,
  Logo
};
//# sourceMappingURL=chunk-WGWQRALG.mjs.map