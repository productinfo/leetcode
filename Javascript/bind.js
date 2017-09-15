Function.prototype.bind = Function.prototype.bind || function (context) {

  var self = this;

  return function () {
    return self.apply(context, arguments);
  };

};

function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  }
}

// es6
if (!Function.prototype.bind) {
  Function.prototype.bind = function (context, ...args) {
    return () => {
      this.apply(context, args);
    };
  };
}

const bind = (fn, context) => (...args) => fn.apply(context, args);