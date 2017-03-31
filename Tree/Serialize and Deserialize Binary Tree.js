const NULL = 'null';
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
  const res = [];
  const construct = r => {
    if (r) {
      res.push(r.val);
      construct(r.left);
      construct(r.right);
    } else {
      res.push(NULL);
    }
  };
  construct(root);
  return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = data => {
  const q = data.split(',');
  const build = _ => {
    const node = q.shift();
    if (node === NULL) {
      return null;
    } else {
      const r = new TreeNode(+node);
      r.left = build();
      r.right = build();
      return r;
    }
  };
  return build();
};