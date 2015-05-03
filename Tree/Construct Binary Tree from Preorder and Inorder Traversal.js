/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @returns {TreeNode}
 */
var buildTree = function(preorder, inorder) {

  function build (ps, pe, is, ie) {
  
    if (ps > pe || is > ie) {
      return null;
    }

    var root = new TreeNode(preorder[ps]), i = 0;

    for (; i < ie ; i++) {

      if (inorder[i] === root.val) {
        break;
      }

    }

    root.left = build(ps + 1, ps + i - is, is, i - 1);
    root.right = build(ps + i - is + 1, pe, i + 1, ie);

    return root;

  }

  return build(0, preorder.length - 1, 0, inorder.length - 1);

};

