// 8/24/2017
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const x = s => {
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
  node.left = x(left);
  node.right = x(right);
  return node;
};
const z = x('4(2(3)(1))(6(5))');
console.log(z);