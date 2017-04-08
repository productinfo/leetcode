/*
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/
const findDuplicates = nums => {
  nums = nums.sort((a, b) => a - b);
  let i = 0;
  while (nums[i]) {
    if (nums[i] !== nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  console.log(nums);
};

const findDuplicates = nums => {
  const map = {};
  const len = nums.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] in map) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
    if (map[nums[i]] === 2) res.push(nums[i]);
  }
  return res;
};