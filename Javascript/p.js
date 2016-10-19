(root => {

  const PENDING = 0;
  const FULFILLED = 1;
  const REJECTED = 2;

  // function noop() {}
  const noop = _ => {};
  const bind = (fn, that) => (...args) => fn.apply(that, args);

  const handle = (self, deferred) => {

  };

  class Handler {
    constructor(onFulfilled, onRejected, promise) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.promise = promise;
    }
  }

  class Promise {
    constructor(fn) {
      // ES6 will throw error
      // if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function') throw new TypeError('not a function');
      this._state = PENDING;
      this._handled = false;
      this._value = undefined;
      this._deferreds = [];
      doResolve(fn, this);
    }

    catch(onRejected) {
      return this.then(null, onRejected);
    }

    then(onFulfilled, onRejected) {
      const pm = new (this.constructor)(noop);
      handle(this, new Handler(onFulfilled, onRejected, prom));
      return pm;
    }

    static all() {

    }

    static resolve(value) {
      if (value && typeof value === 'object' && value.constructor === Promise) {
        return value;
      }
      return new Promise(resolve => resolve(value));
    }

    static reject(reason) {
      return new Promise((resolve, reject) => reject(reason));
    }

    static race(values) {
      return new Promise((resolve, reject) => {
        for (let i = 0, len = values.length; i < len; i++) {
          values[i].then(resolve, reject);
        }
      });
    }

    static _immediateFn() {

    }
  }

  const finale = (self) => {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(() => {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (let i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  };

  const resolve = (self, newValue) => {
    try {
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        const then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = FULFILLED;
      self._value = newValue;
    } catch (e) {
      reject(self, e);
    }
  };

  const reject = (self, newValue) => {
    self._state = REJECTED;
    self._value = newValue;
    finale(self);
  };

  const doResolve = (fn, self) => {
    let done = false;
    try {
      fn(value => {
        if (done) return;
        done = true;
        resolve(self, value);
      }, reason => {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  if (typeof module !== undefined && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);
