const HammingDistance = (x, y) => (x ^ y).toString(2).split('').reduce((total, c) => {
  if (c === '1') total += 1;
  return total;
}, 0);

const totalHammingDistance = nums => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      total += HammingDistance(nums[i], nums[j]);
    }
  }
  return total;
};