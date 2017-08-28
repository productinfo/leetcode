// BST to LST
class DLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
const x = root => {
  if (!root) return null;
  let head = new DLNode(-1);
  let cur = head;
  const stack = [];
  const res = [];
  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      const dln = new DLNode(root.val);
      cur.next = dln;
      dln.prev = cur;
      cur = dln;
      root = root.right;
    }
  }
  return head.next;
};

// LST to BST
const y = head => {
  if (!head) return null;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (slow.val === fast.val) return new TreeNode(slow.val);
  slow.prev.next = null;
  fast = slow.next;
  const r = new TreeNode(slow.val);
  r.left = y(head);
  r.right = y(fast);
  return r;
};

// 5/23/2017
// preorder

const NULL = 'null';

class DDL {
  constructor(val) {
    this.prev = null;
    this.next = null;
    this.val = val;
  }
}

class TreeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

const aa = new TreeNode(1);
const bb = new TreeNode(2);
const cc = new TreeNode(3);
const dd = new TreeNode(4);
const ee = new TreeNode(5);
const ff = new TreeNode(6);
const gg = new TreeNode(7);

aa.left = bb;
aa.right = cc;

bb.left = dd;
bb.right = ee;

cc.left = ff;
cc.right = gg;

var a = new DDL(1);

var b = new DDL(2);

var c = new DDL(3);

var d = new DDL(4);

var e = new DDL(5);

var f = new DDL(6);

var g = new DDL(7);

a.next = b;
b.prev = a;
b.next = c;
c.prev = b;
c.next = d;
d.prev = c;
d.next = e;
e.prev = d;
e.next = f;
f.prev = e;
f.next = g;
g.prev = f;

const s = root => {
  // debugger
  const dm = new DDL(-1);
  let cur = dm;
  const go = r => {
    if (r) {
      const ddl = new DDL(r.val);
      cur.next = ddl;
      ddl.prev = cur;
      cur = cur.next;
      go(r.left);
      go(r.right);
    } else {
      cur.next = new DDL(null);
    }
  };
  go(root);
  return dm.next;
};

const deserialize = head => {
  const go = () => {
    const { val } = head;
    head = head.next;
    if (val === null) return null;
    const r = new TreeNode(val);
    r.left = go();
    r.right = go();
    return r;
  };
  return go();
};

console.log(s(aa));

// 8/22/2017
const s = root => {
  if (!root) return null;
  const dm = new DDL(-1);
  let cur = dm;
  const go = r => {
    const h = new DDL(r ? r.val : null);
    cur.next = h;
    h.prev = cur;
    cur = cur.next;
    if (r) {
      go(r.left);
      go(r.right);
    }
  };
  go(root);
  return dm.next;
};

const ds = head => {
  const go = _ => {
    if (!head || !head.next) return head;
    const { val } = head;
    head = head.next;
    if (val) {
      const r = new TreeNode(val);
      r.left = go();
      r.right = go();
      return r;
    } else {
      return null;
    }
  };
  return go();
};

// 8/27/2017
const serialize = root => {
  if (!root) return null;
  const head = new DDL(-1);
  let cur = head;
  const go = r => {
    const ddl = new DDL(r ? +r.val : null);
    ddl.prev = cur;
    cur.next = ddl;
    cur = cur.next;
    if (r) {
      go(r.left);
      go(r.right);
    }
  };
  go(root);
  cur.next = head.next;
  head.next.prev = cur;
  return head.next;
};

const deserialize = head => {
  if (!head) return null;
  const go = _ => {
    if (!head) return null;
    const { val } = head;
    head = head.next;
    if (val === null) {
      return null;
    } else {
      const r = new TreeNode(val);
      r.left = go();
      r.right = go();
      return r;
    }
  };
  return go();
};