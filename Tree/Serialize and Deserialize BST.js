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