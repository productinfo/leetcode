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
