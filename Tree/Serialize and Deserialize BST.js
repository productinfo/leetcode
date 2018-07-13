var serialize = function(root) {
  if (!root) return '#!';
  let res = `${root.val}!`;
  res += serialize(root.left);
  res += serialize(root.right);
  return res;
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  // 4!2!1!#!#!3!#!#!6!5!#!#!7!#!#!
  const g = data.split('!');
  const go = _ => {
    const v = g.shift();
    if (v === '#') return null;
    else {
      const r = new TreeNode(+v);
      r.left = go();
      r.right = go();
      return r;
    }
  };
  return go();
};

// 5/14/2018
const splitter = '!';
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '';
  let tmp = '';
  const preorder = r => {
    if (!r) return;
    tmp += `${r.val}${splitter}`
    preorder(r.left);
    preorder(r.right);
  };
  preorder(root);
  return tmp;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data.length) return null;
  const g = data.split(splitter);
  let i = 0;
  const b = (min = -Infinity, max = Infinity) => {
    if (i >= g.length || g[i] === '') return null;
    const val = +g[i];
    if (min < val && val < max) {
      const r = new TreeNode(val);
      i++;
      r.left = b(min, val);
      r.right = b(val, max);
      return r;
    } else {
      return null;
    }
  };
  return b();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

