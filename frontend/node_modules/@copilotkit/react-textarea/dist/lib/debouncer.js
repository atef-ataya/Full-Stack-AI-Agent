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

// src/lib/debouncer.ts
var debouncer_exports = {};
__export(debouncer_exports, {
  Debouncer: () => Debouncer
});
module.exports = __toCommonJS(debouncer_exports);
var Debouncer = class {
  constructor(wait) {
    this.wait = wait;
    this.debounce = (func, ...args) => __async(this, null, function* () {
      this.cancel();
      this.timeoutId = setTimeout(() => __async(this, null, function* () {
        try {
          this.activeAbortController = new AbortController();
          yield func(...args, this.activeAbortController.signal);
          this.activeAbortController = void 0;
        } catch (error) {
        }
      }), this.wait);
    });
    this.cancel = () => {
      if (this.activeAbortController) {
        this.activeAbortController.abort();
        this.activeAbortController = void 0;
      }
      if (this.timeoutId !== void 0) {
        clearTimeout(this.timeoutId);
        this.timeoutId = void 0;
      }
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Debouncer
});
//# sourceMappingURL=debouncer.js.map