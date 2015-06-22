// Given a binary search tree and a key, if found return 1 else -1

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

var find = function (root, target) {

  if (!root) {
    return -1;
  }

  if (root.val === target) {
    return 1;
  }

  var l, r;

  if (root.left) {
    l = find(root.left, target);
  }

  if (root.right) {
    r = find(root.right, target);
  }

  return l === 1 || r === 1 ? 1 : -1;

};

console.log(find(d, 1));
console.log(find(d, 2));
console.log(find(d, 3));
console.log(find(d, 4));
console.log(find(d, 5));
console.log(find(d, 6));
console.log(find(d, 7));
// console.log(find(d, 8));
// console.log(find(d, 0));
// console.log(find(d, 22));
// console.log(find(d, 211));
// console.log(find(d, 267));