/*
 * Partial application:
 * means taking a function and paritally applying it to one or more of its arguments,
 * but not all, creating a new function in the process.
 */

function apply(fn, ...args) {
  return (...rest) => {
    return fn(...args, ...rest);
  };
}
