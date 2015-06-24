function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

function Relation (child, parent, isLeft) {
  this.parent = parent;
  this.child = child;
  this.isLeft = isLeft;
}

var build = function (list) {

  var len = list.length;

  if (len === 0) {
    return null;
  }

  var i = 0, root;

  for (; i < len ; i++) {
    if (!list[i].parent) {

      root = new TreeNode(list[i].child);
      break;

    }
  }

  var q = [root], node, item;

  while (q.length > 0) {

    node = q.shift();

    for (i = 0 ; i < len ; i++) {

      if (list[i].parent === node.val) {

        item = new TreeNode(list[i].child);
        q.push(item);

        if (list[i].isLeft) {
          node.left = item;
        } else {
          node.right = item;
        }

      }

    }

  }

  console.log(root);
  return root;
};

var r1 = new Relation(15, 20, true);
var r2 = new Relation(19, 80, true);
var r3 = new Relation(17, 20, false);
var r4 = new Relation(16, 80, false);
var r5 = new Relation(80, 50, false);
var r6 = new Relation(50, null, false);
var r7 = new Relation(20, 50, true);



build([r1, r2, r3, r4, r5, r6, r7]);