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

// src/lib/retry.tsx
var retry_exports = {};
__export(retry_exports, {
  retry: () => retry
});
module.exports = __toCommonJS(retry_exports);
function retry(fn, retriesLeft = 2, interval = 200, backoff = 1.5) {
  return new Promise((resolve, reject) => {
    fn().then(resolve).catch((error) => {
      if (retriesLeft === 1) {
        reject(error);
        return;
      }
      setTimeout(() => {
        retry(fn, retriesLeft - 1, interval * backoff, backoff).then(resolve).catch(reject);
      }, interval);
    });
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  retry
});
//# sourceMappingURL=retry.js.map