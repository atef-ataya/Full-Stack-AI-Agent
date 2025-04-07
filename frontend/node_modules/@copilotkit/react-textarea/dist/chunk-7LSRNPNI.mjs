// src/components/base-copilot-textarea/use-add-branding-css.tsx
import { useEffect } from "react";
function useAddBrandingCss(suggestionStyleAugmented, disableBranding) {
  const cssSelector = ".copilot-textarea.with-branding";
  useEffect(() => {
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

export {
  useAddBrandingCss
};
//# sourceMappingURL=chunk-7LSRNPNI.mjs.map