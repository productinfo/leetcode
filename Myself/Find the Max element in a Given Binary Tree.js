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

var getMax = function (root) {

  if (!root) {
    return 0
  }

  var mx1 = Math.max(getMax(root.left), getMax(root.right));
  var mx2 = Math.max(root.val, mx1);

  return mx2;

};