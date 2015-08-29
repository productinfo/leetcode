/**
 * @constructor
 */
var Stack = function() {
  this.q = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {

  var tempQ = [x];

  while (this.q.length > 0) {

    tempQ.unshift(this.q.pop());

  }

  this.q = tempQ;

};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  this.q.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  return this.q[this.q.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return this.q.length === 0;
};
