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

// convert to Linked List
const NULL = 'null';
/**
  
 */
var serialize = function(root) {
  const dm = new ListNode(-1);
  let cur = dm;
  const go = r => {
    if (r) {
      cur.next = new ListNode(r.val);
      cur = cur.next;
      go(r.left);
      go(r.right);
    } else {
      cur.next = new ListNode(NULL);
      cur = cur.next;
    }
  };
  go(root);
  return dm.next;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(head) {
  let cur = head;
  const go = _ => {
    if (cur.val === NULL) {
      cur = cur.next;
      return null;
    } else {
      const r = new TreeNode(cur.val);
      cur = cur.next;
      r.left = go();
      r.right = go();
      return r;
    }
  };
  return go();
};