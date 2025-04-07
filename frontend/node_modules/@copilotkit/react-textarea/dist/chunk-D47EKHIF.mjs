import {
  cn
} from "./chunk-YLFAIYRY.mjs";
import {
  __objRest,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/ui/label.tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { jsx } from "react/jsx-runtime";
var labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(LabelPrimitive.Root, __spreadValues({ ref, className: cn(labelVariants(), className) }, props));
});
Label.displayName = LabelPrimitive.Root.displayName;

export {
  Label
};
//# sourceMappingURL=chunk-D47EKHIF.mjs.map