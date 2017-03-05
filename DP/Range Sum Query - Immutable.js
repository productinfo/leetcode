class NumArray {
  constructor(nums) {
    for (let l = nums.length, i = 1; i < l; i++) {
      nums[i] += nums[i - 1];
    }
    console.log(nums);
    this.nums = nums;
  }
  sumRange(i, j) {
    return i === 0 ? this.nums[j] : this.nums[j] - this.nums[i - 1];
  }
}
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(2, 5));
console.log(numArray.sumRange(0, 5));