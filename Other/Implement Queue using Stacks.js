/**
 * @constructor
 */
var Queue = function() {
  this.s = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {

  var rev = [];

  while (this.s.length > 0) {
    rev.push(this.s.pop())
  }

  rev.push(x);

  while (rev.length > 0) {
    this.s.push(rev.pop());
  }

};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  this.s.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  return this.s[this.s.length - 1];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return this.s.length === 0;
};
