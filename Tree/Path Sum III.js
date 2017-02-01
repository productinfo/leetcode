const pathSum = (root, target) =>
  root ? x(root, 0, target) + pathSum(root.left, target) + pathSum(root.right, target)
  : 0;
const x = (r, pre, target) => {
  if (!r) return 0;
  const sum = pre + r.val;
  return +(sum === target) + x(r.left, sum, target) + x(r.right, sum, target); 
}

// 11/28/2016
const pathSum = (root, sum) => {
  if (!root) return 0;
  const go = (r, target) => {
    if (!r) return 0;
    let res = +(r.val === target);
    res += go(r.left, target - r.val);
    res += go(r.right, target - r.val);
    return res;
  };
  let ans = go(root, sum);
  ans += pathSum(root.left, sum);
  ans += pathSum(root.right, sum);
  return ans;
};