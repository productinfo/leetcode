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

var path = function (root, dest) {

  var res = [];

  if (!root) {
    return res;
  }

  var build = function (r) {

    if (!r) {
      return false;
    }

    if (r === dest || build(r.left) || build(r.right)) {
      res.push(r.val);
      return true;
    }

    return false;
  };

  build(root);

  return res;

};