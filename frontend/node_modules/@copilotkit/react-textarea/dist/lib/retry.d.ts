declare function retry<T>(fn: () => Promise<T>, retriesLeft?: number, interval?: number, backoff?: number): Promise<T>;

export { retry };
