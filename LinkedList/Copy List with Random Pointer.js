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