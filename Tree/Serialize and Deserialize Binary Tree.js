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

// 8/21/2017
const N = 'null';
var serialize = function(root) {
  if (!root) return '';
  const sub = [];
  const go = r => {
    if (r) {
      sub.push(r.val);
      go(r.left);
      go(r.right);
    } else {
      sub.push(N);
    }
  };
  go(root);
  return sub.join(',');
};
var deserialize = function(data) {
  if (!data.length) return null;
  const g = data.split(',');
  const b = _ => {
    const node = g.shift();
    if (node === N) {
      return null;
    } else {
      const root = new TreeNode(+node);
      root.left = b();
      root.right = b();
      return root;
    }
  };
  return b();
};

// 5/14/2018
const splitter = '!';
const NULL = 'null';
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
  // preorder
  const preorder = r => {
    if (r) {
      tmp += `${r.val}${splitter}`;
      preorder(r.left);
      preorder(r.right);
    } else {
      tmp += `${NULL}${splitter}`;
    }
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
  if (!data) return null;
  const g = data.split(splitter);
  const build = () => {
    const node = g.shift();
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

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

