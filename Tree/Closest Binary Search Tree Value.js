/**
Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:

Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
*/

var closestValue = function (root, target) {

  if (!root || !target) return Number.MAX_VALUE;

  if (!root.left && !root.right) return root.val;

  var l = closestValue(root.left, target),
      r = closestValue(root.right, target),
      diff = Math.abs(root.val - target),
      ld = Math.abs(l - target),
      rd = Math.abs(r - target);

  if (diff < ld) {
    return diff < rd ? root.val : r;
  } else {
    return ld < rd ? l : r;
  }

};


/////////////////////////////////////////////
//
/////////////////////////////////////////////

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

// 8/31/2016
const foo = (root, target) => {
	let result;
	let min = Number.MAX_VALUE;
	const rec = (r, t) => {
		if (!r) return;

		const diff = Math.abs(r.val - target);
		if (diff < min) {
			min = diff;
			result = root.val;
		}
		if (target < r.val) {
			rec(r.left, target);
		} else {
			rec(r.right, target);
		}
	};
	rec(root, target);
	return result;
};
