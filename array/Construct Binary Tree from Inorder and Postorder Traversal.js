/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @returns {TreeNode}
 */
var buildTree = function(inorder, postorder) {

  var ie = inorder.length - 1,
      is = 0,
      pe = postorder.length - 1,
      ps = 0;

  var go = function (is, ie, ps, pe) {

    if (is > ie || ps > pe) {
      return null;
    }

    var root = new TreeNode(postorder[pe]);

    var index = 0;
    var i = 0;

    for (; i < inorder.length ; i++) {
      if (inorder[i] === postorder[pe]) {
        index = i;
        break;
      }
    }

    root.left = go(is, index - 1, ps, ps + index - is + 1);
    root.right = go(index + 1, ie, ps + index - is, pe - 1);

    return root;

  };

  return go(is, ie, ps, pe);

};