/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number[][]}
 */
var zigzagLevelOrder = function(root) {

  var q = [], res = [], node, size, i, tmp, reverse = false;

  if (!root) {
    return res;
  }

  q.push(root);

  while (q.length > 0) {

    size = q.length;

    tmp = [];

    for (i = 0 ; i < size ; i++) {

      node = q.shift();

      if (reverse) {
        tmp.unshift(node.val);
      } else {
        tmp.push(node.val);
      }

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }

    }

    reverse = !reverse;
    res.push(tmp);

  }

  return res;


};

// 10/23/2016
const zigzagLevelOrder = root => {
  const res = [];
  if (!root) return res;
  const q = [root];
  let direction = true;
  while (q.length) {
    const size = q.length;
    const t = [];
    for (let j = 0; j < size; j++) {
      const node = q.shift();
      if (direction) {
        t.push(node.val);
      } else {
        t.unshift(node.val);
      }
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(t);
    direction = !direction;
  }
  return res;
};
