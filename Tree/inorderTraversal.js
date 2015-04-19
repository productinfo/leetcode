/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
var inorderTraversal = function(root) {

  var res = [], stack = [], cur = root;

  if (!root) {
    return res;
  }

  // stack.push(root);

  while (stack.length > 0 || cur) {

    if (cur) {

      stack.push(cur);
      cur = cur.left;

    } else {

      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }

  }

  return res;

};

// var inorderTraversal = function(root) {

//   var res = [];

//   // if (!root) {
//   //   return res;
//   // }

//   var inorder = function (r) {

//     if (!r) {
//       return;
//     }

//     inorder(r.left);
//     res.push(r.val);
//     inorder(r.right);

//   };

//   inorder(root);

//   return res;

// };