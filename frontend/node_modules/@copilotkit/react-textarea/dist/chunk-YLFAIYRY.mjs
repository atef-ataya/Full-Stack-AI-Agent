import {
  __async
} from "./chunk-MRXNTQOX.mjs";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
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

export {
  cn,
  fetcher,
  formatDate,
  arraysAreEqual,
  nullableCompatibleEqualityCheck
};
//# sourceMappingURL=chunk-YLFAIYRY.mjs.map