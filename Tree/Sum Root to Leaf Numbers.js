/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number}
 */

// recursive

var sumNumbers = function(root) {  
  return dfs(root, 0);
};

var dfs = function (r, total) {

  if (!r) {
    return 0
  }

  var ans = total * 10 + r.val;

  if (!r.left && !r.right) {
    return ans;
  }

  return dfs(r.left, ans) + dfs(r.right, ans);

};

// stack version

// var sumNumbers = function(root) {
  
//   var stack = [], sum = 0;

//   if (!root) {
//     return sum;
//   }

//   stack.push(root);

//   while (stack.length > 0) {

//     var node = stack.pop();

//     if (node.left) {
//       node.left.val += node.val * 10;
//       stack.push(node.left);
//     }

//     if (node.right) {
//       node.right.val += node.val * 10;
//       stack.push(node.right);
//     }

//     if (!node.left && !node.right) {
//       sum += node.val;
//     }

//   }

//   return sum;

// };