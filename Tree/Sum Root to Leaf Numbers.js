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

 var sumNumbers = function(root) {

   if (!root) return null;

   var total = 0;

   var dfs = function (node, tmp) {

     if (!node) return 0;

     tmp = tmp * 10 + node.val;

     if (!node.left && !node.right) return total + tmp;

     return dfs(node.left, tmp) + dfs(node.right, tmp);

   };

   return dfs(root, 0);
 };

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////


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


// 3/30/2017
const go = (r, s) => {
  if (!r) return 0;
  const ans = s * 10 + r.val;
  if (!r.left && !r.right) return ans;
  return go(r.left, ans) + go(r.right, ans);
}
const sumNumbers = root => root ? go(root, 0) : 0;