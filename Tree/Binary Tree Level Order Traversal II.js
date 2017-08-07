/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// time O(n) space O(n) Accepted

/**
 * @param {TreeNode} root
 * @returns {number[][]}
 */
var levelOrderBottom = function(root) {

  var result = [], q = [];

  if (!root) {
    return result;
  }

  q.push(root);

  while (q.length > 0) {

    var tmp = [];

    var size = q.length;

    for (var i = 0 ; i < size ; i++) {

      var node = q.shift();

      tmp.push(node.val);

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }

    }

    result.unshift(tmp);

  }

  return result;

};

// 10/23/2016
const levelOrderBottom = root => {
  const res = [];
  if (!root) return res;
  const q = [root];
  while (q.length) {
    const size = q.length;
    const t = [];
    for (let j = 0; j < size; j++) {
      const node = q.shift();
      t.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.unshift(t);
  }
  return res;
};
