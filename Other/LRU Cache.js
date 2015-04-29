/**
 * @constructor
 */
var LRUCache = function(capacity) {
    
  this.capacity = capacity;
  this.keymap = {};
  this.size = 0;

};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.keymap.hasOwnProperty(key)) {

      var v = this.keymap[key].value;
      this.set(key, v);

    } else {
      return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    
  if (this.size === 0) {
    // cache is empty
    
  } else if (this.keymap.hasOwnProperty(key)) {
    // key is existed
  } else if (size >= capacity) {
    // size over
  } else {
    // regular set
  }

};