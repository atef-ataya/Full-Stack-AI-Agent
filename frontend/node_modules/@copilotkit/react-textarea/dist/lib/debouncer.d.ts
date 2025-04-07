type AsyncFunction<T extends any[]> = (...args: [...T, AbortSignal]) => Promise<void>;
declare class Debouncer<T extends any[]> {
    private wait;
    private timeoutId?;
    private activeAbortController?;
    constructor(wait: number);
    debounce: (func: AsyncFunction<T>, ...args: T) => Promise<void>;
    cancel: () => void;
}

export { AsyncFunction, Debouncer };
