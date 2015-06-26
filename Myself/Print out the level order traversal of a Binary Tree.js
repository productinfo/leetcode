// Print out the level order traversal of a Binary Tree, with new line after each level.  

var printTree = function (root) {

  if (!root) {
    return;
  }

  var q = [root];

  var size, j, node, tmp;

  while (q.length > 0) {

    size = q.length;

    tmp = '[';

    for (j = 0 ; j < size ; j++) {

      node = q.shift();

      tmp += node.val + ' ';

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }

    }

    console.log(tmp.trim() + ']');

  }

};