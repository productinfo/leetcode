/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {

  if (!head) {
    return null;
  }

  var cur = head;
  var newNode;

  // duplicate node and link to origin list
  while (cur) {

    newNode = new RandomListNode(cur.label);
    newNode.next = cur.next;
    cur.next = newNode;
    cur = newNode.next;

  }

  cur = head;

  // duplicate random links
  while (cur) {

    if (cur.random) {
      cur.next.random = cur.random.next;
    }
    cur = cur.next.next;

  }

  // break old and new
  var dm = head.next;
  cur = head;

  while (cur) {

    newNode = cur.next;
    cur.next = newNode.next;
    if (newNode.next) {
      newNode.next = newNode.next.next;
    }
    cur = cur.next;

  }

  return dm;
};

// 4/18/2017
/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  let cur = head;
  while (cur) {
    let next = cur.next;
    const copy = new RandomListNode(cur.label);
    cur.next = copy;
    copy.next = next;
    cur = next;
  }

  cur = head;
  while (cur) {
    if (cur.random) {
      cur.next.random = cur.random.next;
    }
    cur = cur.next.next;
  }
  cur = head;
  const dm = new RandomListNode(-1);
  let iter = dm;
  while (cur) {
    let next = cur.next.next;

    let copy = cur.next;
    iter.next = copy;
    iter = copy;

    cur.next = next;

    cur = next;
  }
  return dm.next;
};

// 4/2/2018
var copyRandomList = function(head) {
  if (!head || !head.next) return head;
  const map = {};
  let cur = head;
  while (cur) {
    map[cur] = new RandomListNode(cur.label);
    cur = cur.next;
  }
  cur = head;
  while (cur) {
    // connect from head to tail
    map[cur].next = map[cur.next];
    // connect random
    map[cur].random = map[cur.random];
    cur = cur.next;
  }
  return map[head];
};
