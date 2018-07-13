/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.min = this.max = null;
 * }
 */

// time O(n^2)
// not compile
/**
 * @param {number} n
 * @returns {TreeNode[]}
 */
var generateTrees = function(n) {

  

  var go = function (min, max) {

    var res = [];

    if (min > max) {
      res.push(null);
      return res;
    }

    if (min === max) {
      res.push(new TreeNode(min));
      return res;
    }

    // we can choose any i node to be root node as long as 1 < i < n
    for (var i = min ; i <= max ; i++) {

      var lefts = go(min, i - 1);
      var rights = go(i + 1, max);

      for (var j = 0 ; j < lefts.length ; j++) {
        for (var k = 0 ; k < rights.length ; k++) {

          var node = new TreeNode(i);

          node.left = lefts[j];
          node.right = rights[k];

          res.push(node);

        }

      }
    }

  };

  return go(1, n);

  // return res;

};

// 11/11/2016
const generateTrees = n => {
  if (n === 0) return [];
  const go = (start, end) => {
  	const res = [];	
  	if (start > end) {
    	res.push(null);
      return res;
    }
    if (start === end) {
    	res.push(new TreeNode(start));
      return res;
    }
    for (let i = start; i <= end; i++) {
			// debugger;
			const l = go(start, i - 1);
      const r = go(i + 1, end);
			for (let ll = l.length, m = 0; m < ll; m++) {
      	for (let rr = r.length, n = 0; n < rr; n++) {
        	const rt = new TreeNode(i);
          rt.left = l[m];
          rt.right = r[n];
          res.push(rt);
        }
      }
    }
    return res;
  };
  return go(1, n);
};
// console.log(f(2));

// 3/25/2018
var generateTrees = function(n) {
  if (n === 0) return [];
  const x = (s, e) => {
    const res = [];
    if (s > e) return [null];
    for (let i = s; i <= e; i++) {
      const left = x(s, i - 1);
      const right = x(i + 1, e);
      for (const l of left) {
        for (const r of right) {
          const root = new TreeNode(i);
          root.left = l;
          root.right = r;
          res.push(root);
        }
      }
    }
    return res;
  };
  return x(1, n);
};
