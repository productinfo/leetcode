function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
var d = new TreeNode(4);
var e = new TreeNode(5);
var f = new TreeNode(6);
var g = new TreeNode(7);

d.left = b;
d.right = f;

b.left = a;
b.right = c;

f.left = e;
f.right = g;

/**
 * Dist(n1, n2) = Dist(root, n1) + Dist(root, n2) - 2 * Dist(root, lca)
 */

var find = function (root, n1, n2) {

  var lca = LCA(root, n1, n2);

  return dist(root, n1) + dist(root, n2) - 2 * dist(root, lca);

};

var dist = function (root, target) {

  var total = 0;

  if (!root) {
    return total;
  }

  var build = function (r) {

    if (!r) {
      return 0;
    }

    if (r === target || build(r.left) || build(r.right)) {
      total++;
      return total;
    }

    return 0
  };

  build(root);

  return total;

};


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