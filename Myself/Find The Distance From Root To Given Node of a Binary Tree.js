var dist = function (root, target) {

  var total = 0;

  if (!root) {
    return res;
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

  return total - 1;

};