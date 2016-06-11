// only one of onFulfilled or onRejected is called
// it is only called once
// it is never called until the next tick (i.e. after the .done method has returned)
// it is called regardless of whether the promise is resolved before or after we call .done

let PENDING = 0,
    FULFILLED = 1,
    REJECTED = 2;

function Promise() {

  // store state which can be PENDING, FULFILLED or REJECTED
  let state = PENDING;

  // store value or error once FULFILLED or REJECTED
  let value = null;

  // store sucess & failure handlers attached by calling .then or .done
  let handler = [];

  function fulfill(result) {
    state = FULFILLED;
    value = result;
  }

  function reject(err) {
    state = REJECTED;
    value = err;
  }

  function resolve(result) {

    try {

      let then = getThen(result);
      if (then) {
        // result is a promise
        doResolve(then.bind(result) resolve, reject);
        return;
      }

      fulfill(result);

    } catch (e) {
      reject(e);
    }

  }

  this.then = function (onFulfilled, onRejected) {

    let self = this;

    return new Promise(function (resolve, reject) {

      return self.done();

    });

  };

}

/**
 * Check if a value is a Promise and, if it is,
 * return the `then` method of that promise.
 *
 * @param {Promise|Any} value
 * @return {Function|Null}
 */
function getThen(value) {

  let t = typeof value;

  if (value && (t === 'object' || t === 'function')) {

    let then = value.then;
    if (typeof then === 'function') {
      return then;
    }

  }

  return null;

}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 *
 * @param {Function} fn A resolver function that may not be trusted
 * @param {Function} onFulfilled
 * @param {Function} onRejected
 */
 function doResolve(fn, onFulfilled, onRejected) {

   let done = false;

   try {

     fn((value) => {

       if (done) return;
       done = true;

       onFulfilled(value);

     }, (err) => {

       if (done) return;
       done = true;

       onRejected(err);
     });

   } catch (ex) {
     if (done) return;
     done = true;
     onRejected(ex);
   }

 }
