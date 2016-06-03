// Partial function application

/*
  Currying
  is the process of taking a function that accepts N arguments
  and turning it into a chained series of N functions each taking 1 argument.
*/

function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn.apply(this, args)
      : (...rest) => {
        return curried.call(this, ...args, ...rest);
      };
  };
}

function foo(a,b,c){ return a+b+c; }
var curriedFoo = curry(foo);

curriedFoo(1,2,3);   // 6
curriedFoo(1)(2,3);  // 6
curriedFoo(1)(2)(3); // 6
curriedFoo(1,2)(3);  // 6
