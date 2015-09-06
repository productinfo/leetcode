/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

  var res = [], sub;

  if (!root) return res;

  sub = [];

  var dfs = function (node) {

    if (!node) return;

    sub.push(node.val);

    if (!node.left && !node.right) {
      // left, output sub array
      res.push(sub.join('->'));
      return;
    }

    if (node.left) {
      dfs(node.left);
      sub.pop();
    }

    if (node.right) {
      dfs(node.right);
      sub.pop();
    }

  };

  dfs(root);

  return res;

};
