var printkdistanceNode = function (root, target, k) {

  var res = []

  if (!root) {
    return res;
  }

  var printkdistanceNodeDown = function (r, x) {

    if (!r || x < 0) {
      return;
    }

    if (x === 0) {
      res.push(r.val);
    }

    printkdistanceNodeDown(r.left, x - 1);
    printkdistanceNodeDown(r.right, x - 1);

  };

  if (root === target) {

    printkdistanceNodeDown(root, k);

  } else {

    
    
  }

};

