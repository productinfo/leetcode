//  * from right to left. For example, compose(f, g, h) is identical to doing
// * (...args) => f(g(h(...args))).

const compose = (...fns) => {
  if (!fns.length) return arg => arg;
  if (fns.length === 1) return fns[0];
  return fns.reduce((a, b) => (...args) => a(b(...args)));
};