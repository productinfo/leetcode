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
    var k = 0;

    for (; k < inorder.length ; k++) {
      if (inorder[k] === root.val) {
        break;
      }
    }

    root.left = go(is, k - 1, ps, ps + k - is - 1);
    root.right = go(k + 1, ie, ps + k - is, pe - 1);

    return root

  };

  return go(is, ie, ps, pe);

};