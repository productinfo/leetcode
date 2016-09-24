/*
Detect if a subset from a given set of N non-negative integers sums upto a given value S.
Example:
Set: {1, 3, 9, 2}, S = 5
Output: true
*/

const goo = (nums, target) => {
	const len = nums.length;
	const total = 0;
	let flag = false;
	nums = nums.sort((a, b) => a - b);
	const dfs = (index, rem) => {
		if (rem === 0) {
			flag = true;
			return;
		}
		for (let i = index; i < len; i++) {
			if (nums[i] > rem) {
				return;
			}
			dfs(i + 1, rem - nums[i])
		}
	};
	dfs(0, target);
	return flag;
};

console.log(goo([1, 3, 9, 2], 5));

// 9/24/2016
const f = (arr, target) => {
	const len = arr.length;
	if (!len) return false;
	let flag = false
	const dfs = (index, rem) => {
		if (rem < 0) {
			return;
		}
		if (rem === 0) {
			flag = true;
			return;
		}
		for (let i = index; i < len; i++) {
			dfs(i + 1, rem - arr[i]);
		}
	};
	dfs(0, target);
	return flag;
}
