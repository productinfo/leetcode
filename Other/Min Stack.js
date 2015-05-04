/**
 * @constructor
 */
var MinStack = function() {
  this.list = [];
};

var XYZ = function (v, min) {
  this.v = v;
  this.min = min;
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  
  var list = this.list,
      len = list.length;

  if (len === 0) {
    // empty
    list.push(new XYZ(x, x));
  } else {

    var m = Math.min(list[len - 1].min, x);
    this.list.push(new XYZ(x, m));

  }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  var len = this.list.length;
  if (len === 0) {
    throw new Error();
  }
  this.list.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  var len = this.list.length;
  if (len === 0) {
    throw new Error();
  }
  return this.list[len - 1].v;
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {

  var len = this.list.length;
  if (len === 0) {
    throw new Error();
  }
  return this.list[len - 1].min;

};