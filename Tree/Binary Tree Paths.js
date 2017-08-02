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

// 10/23/2016
const binaryTreePaths = root => {
  const res = [];
  if (!root) return res;
  const sub = [];
  const dfs = r => {
    if (!r) return;
    sub.push(r.val);
    if (!r.left && !r.right) {
      res.push(sub.join('->'));
      return;
    }
    if (r.left) {
      dfs(r.left);
      sub.pop();
    }
    if (r.right) {
      dfs(r.right);
      sub.pop();
    }
  };
  dfs(root);
  return res;
};

/*
Though it seems that time complexity is O(N)
but if you need to print all paths then it is O(N*logN).
Suppose that u have a complete binary tree then the total paths will be N/2
and each path will have logN nodes so total of O(N*logN) in worst case.
*/