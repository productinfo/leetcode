/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify the binary tree in-place instead.
 */
var recoverTree = function(root) {

  if (!root) {
    return;
  }

  var pv, n2, n1;

  var inorder = function (r) {

    if (!r) {
      return;
    }

    inorder(r.left);

    if (pv) {

      if (pv.val >= r.val) {
        if (!n1) {
          n1 = r;
        }
        n2 = r;
      }

    }

    pv = r;

    inorder(r.right);

  };

  inorder(root);

  // swap
  
  var tmp = n1.val;
  n1.val = n2.val;
  n2.val = tmp;

};

// 3/25/2018
// use example
// 1 6 3 4 5 2 7
// 6 is pv
// 2 is root
// that is why
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  if (!root) return;
  let n1 = null;
  let n2 = null;
  let pv = null;
  const x = r => {
    if (!r) return;
    x(r.left);
    if (pv && pv.val >= r.val) {
      if (!n1) n1 = pv;
      n2 = r;
    }
    pv = r;
    x(r.right);
  };
  x(root);
  const tmp = n1.val;
  n1.val = n2.val;
  n2.val = tmp;
};
