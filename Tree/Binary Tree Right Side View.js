/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
var rightSideView = function(root) {

  var res = [];

  if (!root) {
    return res;
  }

  var q = [],
      j,
      node,
      size,
      tmp;

  q.push(root);

  while (q.length > 0) {

    size = q.length;

    for (j = 0 ; j < size ; j++) {

      node = q.shift();

      if (j === 0) {
        res.push(node.val);
      }

      if (node.right) {
        q.push(node.right);
      }

      if (node.left) {
        q.push(node.left);
      }
    }

  }

  return res;
};

// 4/7/2016
// space O(1)
const rightSideView = (root) => {

	const list = [];

	const go = (r, level) => {
		if (!r) return;

		if (list.length === level) list.push(r.val);

		go(r.right, level + 1, list);
		go(r.left, level + 1, list);
	};

	go(root, 0);
	return list;
};

// space O(n)
"use strict";

var rightSideView = function rightSideView(root) {

	var r = [];
	if (!root) return r;

	var q = [root];

	while (q.length > 0) {
		for (var j = 0; j < q.length; j++) {
			var node = q.shift();
			if (j === 0) r.push(node.val);
			if (node.right) q.push(node.right);
			if (node.left) q.push(node.left);
		}
	}

	return r;
};
