import {
  __async
} from "./chunk-MRXNTQOX.mjs";

// src/lib/debouncer.ts
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

export {
  Debouncer
};
//# sourceMappingURL=chunk-DFTV4TST.mjs.map