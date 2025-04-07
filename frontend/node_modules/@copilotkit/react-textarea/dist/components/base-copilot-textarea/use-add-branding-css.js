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

// src/components/base-copilot-textarea/use-add-branding-css.tsx
var use_add_branding_css_exports = {};
__export(use_add_branding_css_exports, {
  useAddBrandingCss: () => useAddBrandingCss
});
module.exports = __toCommonJS(use_add_branding_css_exports);
var import_react = require("react");
function useAddBrandingCss(suggestionStyleAugmented, disableBranding) {
  const cssSelector = ".copilot-textarea.with-branding";
  (0, import_react.useEffect)(() => {
    if (disableBranding) {
      return;
    }
    const styleEl = document.createElement("style");
    styleEl.id = "dynamic-styles";
    let dynamicStyles = Object.entries(suggestionStyleAugmented).map(([key, value]) => {
      const kebabCaseKey = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
      return `${kebabCaseKey}: ${value};`;
    }).join(" ");
    dynamicStyles += `font-style: normal; font-size: x-small;`;
    dynamicStyles += `content: "CopilotKit";`;
    dynamicStyles += `bottom: 6px;`;
    dynamicStyles += `right: 6px;`;
    dynamicStyles += `pointer-events: none;`;
    dynamicStyles += `font-weight: 200;`;
    dynamicStyles += `padding: 0;`;
    dynamicStyles += `margin: 0;`;
    dynamicStyles += `border: 0;`;
    dynamicStyles += `line-height: 1;`;
    dynamicStyles += `position: absolute;`;
    styleEl.innerHTML = `
      ${cssSelector}::after {
        ${dynamicStyles}
      }
    `;
    document.head.appendChild(styleEl);
    const textarea = document.querySelector(cssSelector);
    const handleScroll = () => {
      const styleEl2 = document.getElementById("dynamic-styles");
      if (styleEl2 && textarea) {
        const offsetFromBottom = -textarea.scrollTop + 6;
        const offsetFromRight = -textarea.scrollLeft + 6;
        styleEl2.innerHTML = `
          ${cssSelector}::after {
            ${dynamicStyles}
            bottom: ${offsetFromBottom}px;
            right: ${offsetFromRight}px;
          }
        `;
      }
    };
    textarea == null ? void 0 : textarea.addEventListener("scroll", handleScroll);
    return () => {
      var _a;
      (_a = document.getElementById("dynamic-styles")) == null ? void 0 : _a.remove();
      textarea == null ? void 0 : textarea.removeEventListener("scroll", handleScroll);
    };
  }, [disableBranding, suggestionStyleAugmented]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useAddBrandingCss
});
//# sourceMappingURL=use-add-branding-css.js.map