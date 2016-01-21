/**
Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.
For example:
Given a binary tree {1,2,3,4,5},
    1
   / \
  2   3
 / \
4   5
return the root of the binary tree [4,5,2,#,#,3,1].
   4
  / \
 5   2
    / \
   3   1
   */

// time `O(logn)`

var upsideDownBinaryTree = function(root) {

 if (!root) return null;

 var l = root.left;
 var r = root.right;
 var newR = upsideDownBinaryTree(l);

 if (l) {
   l.left = r;
   l.right = root;
 }

 root.left = null;
 root.right = null;

 return newR ? newR : root;

};


/////////////////////////////////////////
//
/////////////////////////////////////////


var upsideDownBinaryTree = function (root) {

  if (!root) return null;

  var q = [];

  var inorder = function (rt) {

    if (!rt) return null;

    inorder(rt.left);

    q.unshift(rt.val);

    inorder(rt.right);

  };

  inorder(root);

  var newRoot = new TreeNode(q.pop()), cur = newRoot;

  while (q.length > 0) {

    cur.right = new TreeNode(q.pop());
    cur.left = new TreeNode(q.pop());

    cur = cur.right;

  }

  return newRoot

};
