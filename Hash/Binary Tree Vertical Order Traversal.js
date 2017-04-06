// O(n)
const verticalOrder = root => {
  const res = [];
  if (!root) return res;
  let min = 0;
  let max = 0;
  const map = {};
  const q = [{
    node: root,
    col: 0
  }];
  while (q.length) {
    const { node, col } = q.shift();
    if (col in map) {
      map[col].push(node.val);
    } else {
      map[col] = [node.val];
    }
    if (node.left) {
      q.push({
        node: node.left,
        col: col - 1
      });
      min = Math.min(min, col - 1);
    }
    if (node.right) {
      q.push({
        node: node.right,
        col: col + 1
      });
      max = Math.max(max, col + 1);
    }
  }

  for (let i = min; i <= max; i++) {
    res.push(map[i]);
  }

  return res;
};