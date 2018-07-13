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
	const rec = r => {
		if (!r) return;

		const diff = Math.abs(r.val - target);
		if (diff < min) {
			min = diff;
			result = root.val;
		}
		if (target < r.val) {
			rec(r.left);
		} else {
			rec(r.right);
		}
	};
	rec(root);
	return result;
};

// 9/24/2016
const f = (root, target) => {
  let res;
  let min = Number.MAX_VALUE;
  const go = r => {
    if (!r) return;
    let diff = Math.abs(r.val - target);
    if (diff < min) {
      min = diff;
      res = r.val;
    }
    if (r.val < target) {
      go(r.left);
    } else {
      go(r.right);
    }
  };
  go(root);
  return res;
};

// 4/22/2016
var closestValue = function(root, target) {
  let closet = 0;
  let diff = Infinity;
  const dfs = node => {
    if (!node) return;
    const delta = Math.abs(target - node.val);
    if (diff > delta) {
      diff = delta;
      closet = node.val;
    }
    if (node.val < target) {
      dfs(node.right);
    } else {
      dfs(node.left);
    }
  };
  dfs(root);
  return closet;
};

// 6/6/2018
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  let ans = 0;
  let min = Infinity;
  const dfs = r => {
    if (!r) return;
    const diff = Math.abs(r.val - target);
    if (diff < min) {
      min = diff;
      ans = r.val;
    }
    dfs(r.left);
    dfs(r.right);
  };
  dfs(root);
  return ans
};

