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

  var min = this.list.length === 0 ? x : Math.min(this.getMin(), x);
  this.list.push(new XYZ(x, min));
  
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

// 11/16/2016
class Node {
  constructor(val, min) {
    this.val = val;
    this.min = min;
  }
}

class MinStack {
  constructor() {
    this.s = [];
  }
  push(x) {
    const min = this.s.length
      ? Math.min(this.s[this.s.length - 1].min, x)
      : x;
    this.s.push(new Node(x, min));
  }
  pop() {
    this.s.length && this.s.pop();
  }
  top() {
    return this.s.length && this.s[this.s.length - 1].val;
  }
  getMin() {
    return this.s.length && this.s[this.s.length - 1].min;
  }
}
