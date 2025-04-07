// src/lib/retry.tsx
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

export {
  retry
};
//# sourceMappingURL=chunk-KNQIEOFP.mjs.map