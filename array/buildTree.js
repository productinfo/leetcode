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

  return build(preorder, 0, preorder.length, inorder, 0, inorder.length);

};

function build (poT, ps, pe, ioT, is, ie) {
  
  if (ps >= pe || is >= ie) {
    return null;
  }

  var root = new TreeNode(poT[ps]), i = 0;

  for (; i < ie ; i++) {

    if (ioT[i] === root.val) {
      break;
    }

  }

  root.left = build(poT, ps + 1, ps + 1 + i - is, ioT, is, i);
  root.right = build(poT, ps + 1 + i - is, pe, ioT, i + 1, ie);

  return root;

}