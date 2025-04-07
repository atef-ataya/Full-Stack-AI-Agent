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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/lib/utils.ts
var utils_exports = {};
__export(utils_exports, {
  arraysAreEqual: () => arraysAreEqual,
  cn: () => cn,
  fetcher: () => fetcher,
  formatDate: () => formatDate,
  nullableCompatibleEqualityCheck: () => nullableCompatibleEqualityCheck
});
module.exports = __toCommonJS(utils_exports);
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
function fetcher(input, init) {
  return __async(this, null, function* () {
    const res = yield fetch(input, init);
    if (!res.ok) {
      const json = yield res.json();
      if (json.error) {
        const error = new Error(json.error);
        error.status = res.status;
        throw error;
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
    return res.json();
  });
}
function formatDate(input) {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
var arraysAreEqual = (arr1, arr2) => arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
function nullableCompatibleEqualityCheck(naiveEqualityCheck, a, b) {
  if (a === null || a === void 0 || b === null || b === void 0) {
    return a === b;
  }
  return naiveEqualityCheck(a, b);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  arraysAreEqual,
  cn,
  fetcher,
  formatDate,
  nullableCompatibleEqualityCheck
});
//# sourceMappingURL=utils.js.map