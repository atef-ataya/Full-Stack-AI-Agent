/**
 * Flatten a promise of a stream, into a stream.
 *
 * Useful because a stream already includes the notion of async value delivery,
 * so it often makes sense to simply await the values rather than the generator of the values.
 *
 * @param {Promise<ReadableStream<A>>} promise - The promise to flatten.
 * @returns {ReadableStream<A>} - The flattened stream.
 */
declare function streamPromiseFlatten<A>(promise: Promise<ReadableStream<A>>): ReadableStream<A>;

export { streamPromiseFlatten };
