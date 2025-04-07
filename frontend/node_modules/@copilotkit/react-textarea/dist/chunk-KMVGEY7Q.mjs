import {
  Label
} from "./chunk-D47EKHIF.mjs";

// src/components/hovering-toolbar/text-insertion-prompt-box/included-files-preview.tsx
import Chip from "@mui/material/Chip/Chip.js";
import Avatar from "@mui/material/Avatar/Avatar.js";
import { jsx, jsxs } from "react/jsx-runtime";
var IncludedFilesPreview = ({
  includedFiles,
  setIncludedFiles
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 mt-2", children: [
    /* @__PURE__ */ jsx(Label, { className: "", children: "Included context:" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: includedFiles.map((filePointer, index) => {
      return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
    Chip,
    {
      label: filePointer.name,
      onDelete,
      avatar: /* @__PURE__ */ jsx(
        Avatar,
        {
          src: filePointer.iconImageUri,
          alt: filePointer.sourceApplication,
          sx: { backgroundColor: "transparent" }
        }
      )
    }
  );
};

export {
  IncludedFilesPreview,
  FileChipPreview
};
//# sourceMappingURL=chunk-KMVGEY7Q.mjs.map