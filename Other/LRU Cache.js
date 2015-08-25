function Node(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}

/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this._keymap = {};
    this.dmFirst = new Node(-1, -1);
    this.dmLast = new Node(-1, -1);

    this.dmFirst.next = this.dmLast;
    this.dmLast.prev = this.dmFirst;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {

    if (this._keymap.hasOwnProperty(key)) {

      var v = this._keymap[key].val;

      this.set(key, v);

      return v;

    } else return -1;

};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
 LRUCache.prototype.set = function(key, value) {

   var node;

   if (this.size === 0) {

     node = new Node(key, value);
     this.dmFirst.next = node;
     node.next = this.dmLast;
     this.dmLast.prev = node;
     node.prev = this.dmFirst;
     this.size++;
     this._keymap[key] = node;

   } else if (this._keymap.hasOwnProperty(key)) {

     // remove key node
     node = this._keymap[key];
     node.prev.next = node.next;
     node.next.prev = node.prev;
     delete this._keymap[key];
     this.size--;
     this.set(key, value);

   } else if (this.size >= this.capacity) {

     // remove first node
     node = this.dmFirst.next;
     this.dmFirst.next = node.next;
     node.next.prev = this.dmFirst;
     node.prev = null;
     node.next = null;
     this.size--;
     delete this._keymap[node.key];
     this.set(key, value);

   } else {

     node = new Node(key, value);
     this.dmLast.prev.next = node;
     node.prev = this.dmLast.prev;
     node.next = this.dmLast;
     this.dmLast.prev = node;
     this._keymap[key] = node;
     this.size++;

   }

 };
