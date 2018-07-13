// 8/24/2017
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const str2tree = s => {
  if (!s || !s.length) return null;
  let v = ''
  if (typeof +s[0] === 'number') {
    v += s[0];
    s = s.substring(1);
  }
  const get = () => {
    let count = 0;
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < s.length; i++) {
      const ch = s[i]
      if (ch === '(') count++;
      else if (ch === ')') {
        count--;
        if (count === 0) {
          p2 = i;
          break;
        }
      }
    }
    const res = s.substring(p1 + 1, p2);
    s = s.substring(p2 + 1);
    return res;
  };
  const node = new TreeNode(+v);
  const left = get();
  const right = get();
  node.left = str2tree(left);
  node.right = str2tree(right);
  return node;
};
const z = x('4(2(3)(1))(6(5))');
console.log(z);

// 6/6/2018
var str2tree = function(s) {
  if (!s || !s.length) return null;
  if (s[0] === '(') s = s.slice(1, s.length - 1);
  const paren = s.indexOf('(');
  if (paren === -1) return new TreeNode(+s);
  const r = new TreeNode(+s.slice(0, paren));
  let j = 0;
  let count = 0;
  for (let i = paren; i < s.length; i++) {
    if (s[i] === '(') count++;
    if (s[i] === ')') count--;
    if (count === 0) {
      j = i;
      break;
    }
  }
  r.left = str2tree(s.slice(paren + 1, j));
  r.right = str2tree(s.slice(j + 1, s.length));
  return r;
};
