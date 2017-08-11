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

// 4/25/2016
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.map = {};
    this.first = new Node(-1, -1);
    this.last = new Node(-1, -1);
    this.first.next = this.last;
    this.last.prev = this.first;
  }

  get(key) {
    if (this.map.hasOwnProperty(key)) {
      const val = this.map[key].val;
      this.set(key, val);
      return val;
    }
    return -1;
  }

  set(key, val) {

    if (this.size === 0) {
      // not existed
      // add to the front
      const node = new Node(key, val);
      this.first.next = node;
      node.next = this.last;
      this.last.prev = node;
      node.prev = this.first;
      this.size++;
      this.map[key] = node;
    } else if (this.map.hasOwnProperty(key)) {

      const node = this.map[key];
      // remove node
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = null;
      node.prev = null;
      this.size--;
      delete this.map[key];
      this.set(key, val);

    } else if (this.size >= this.capacity) {

      // remove the first one
      const node = this.first.next;
      this.first.next = node.next;
      node.next.prev = this.first;
      node.next = null;
      node.prev = null;
      this.size--;
      delete this.map[node.key];
      this.set(key, val);

    } else {
      // add to the tail
      const node = new Node(key, val);
      this.last.prev.next = node;
      node.prev = this.last.prev;
      node.next = this.last;
      this.last.prev = node;
      this.size++;
      this.map[key] = node;

    }

  }
}

// 4/13/2017
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = {};
    this.size = 0;
    this.first = new Node(-1, -1);
    this.last = new Node(-1, -1);
    this.first.next = this.last;
    this.last.prev = this.first;
  }

  get(key) {
    if (key in this.map) {
      const node = this.map[key];
      const v = node.value;
      this.put(key, v);
      return v;
    }
    return -1;
  }

  put(key, value) {
    if (this.size === 0) {
      // add to front
      const node = new Node(key, value);
      this.first.next = node;
      node.next = this.last;
      this.last.prev = node;
      node.prev = this.first;
      this.size += 1;
      this.map[key] = node;
    } else if (key in this.map) {
      // remove node
      const node = this.map[key];
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = null;
      node.prev = null;
      this.size -= 1;
      delete this.map[key];
      this.put(key, value);
    } else if (this.size >= this.capacity) {
      // remove first one
      const node = this.first.next;
      this.first.next = node.next;
      node.next.prev = this.first;
      node.next = null;
      node.prev = null;
      this.size -= 1;
      delete this.map[node.key];
      this.put(key, value);
    } else {
      // add to tail
      const node = new Node(key, value);
      node.prev = this.last.prev;
      this.last.prev.next = node;
      node.next = this.last;
      this.last.prev = node;
      this.size += 1;
      this.map[key] = node;
    }
  }
}