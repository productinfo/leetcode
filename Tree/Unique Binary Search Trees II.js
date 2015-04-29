/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.min = this.max = null;
 * }
 */

// time O(n^2)
// not compile
/**
 * @param {number} n
 * @returns {TreeNode[]}
 */
var generateTrees = function(n) {

  

  var go = function (min, max) {

    var res = [];

    if (min > max) {
      res.push(null);
      return res;
    }

    if (min === max) {
      res.push(new TreeNode(min));
      return res;
    }

    // we can choose any i node to be root node as long as 1 < i < n
    for (var i = min ; i <= max ; i++) {

      var lefts = go(min, i - 1);
      var rights = go(i + 1, max);

      for (var j = 0 ; j < lefts.length ; j++) {
        for (var k = 0 ; k < rights.length ; k++) {

          var node = new TreeNode(i);

          node.left = lefts[j];
          node.right = rights[k];

          res.push(node);

        }

      }
    }

  };

  return go(1, n);

  // return res;

};