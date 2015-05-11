
/**
 * bottom to up
 * O(n)
 */

var LCA = function (root, p , q) {

  if (!root) {
    return null;
  }

  if (root === p || root === q) {
    return root;
  }

  var l = LCA(root.left, p, q);
  var r = LCA(root.right, p, q);

  // if p and q are on both sides
  if (l && r) {
    return root;
  }

  // either one of p,q is on one side OR p,q is not in L&R subtrees
  return l ? l : r;

};