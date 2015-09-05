var closestValue = function (root, target) {

  if (!root || !target) return null;

  if (root.val === target) return root;
  else if (root.val < target) {

    if (!root.left) return root;
    var temp = closestValue(root.left, target);
    return temp.val > root.val ? root : temp;

  } else {

    if (!root.right) return root;
    var temp = closestValue(root.right, target);
    return temp.val > root.val ? root : temp;

  }

  return null;
};
