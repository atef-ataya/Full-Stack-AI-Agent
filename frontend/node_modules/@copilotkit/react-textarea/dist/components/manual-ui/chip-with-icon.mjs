import "../../chunk-MRXNTQOX.mjs";

// src/components/manual-ui/chip-with-icon.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ChipWithIcon = ({ label, onDelete, iconUrl }) => {
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center px-3 py-1 rounded-full bg-slate-200 text-sm font-medium text-white", children: [
    iconUrl && /* @__PURE__ */ jsx("img", { src: iconUrl, alt: "icon", className: "w-4 h-4 rounded-full mr-2" }),
    label,
    /* @__PURE__ */ jsx("button", { className: "ml-2 text-white hover:text-gray-200 focus:outline-none", onClick: onDelete, children: "x" })
  ] });
};
export {
  ChipWithIcon
};
//# sourceMappingURL=chip-with-icon.mjs.map