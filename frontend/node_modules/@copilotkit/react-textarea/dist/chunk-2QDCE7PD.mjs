import {
  __async
} from "./chunk-MRXNTQOX.mjs";

// src/lib/stream-promise-flatten.ts
function streamPromiseFlatten(promise) {
  return new ReadableStream({
    start(controller) {
      return __async(this, null, function* () {
        try {
          const stream = yield promise;
          const reader = stream.getReader();
          while (true) {
            const { done, value } = yield reader.read();
            if (done) {
              controller.close();
              return;
            }
            controller.enqueue(value);
          }
        } catch (error) {
          controller.error(error);
        }
      });
    }
  });
}

export {
  streamPromiseFlatten
};
//# sourceMappingURL=chunk-2QDCE7PD.mjs.map