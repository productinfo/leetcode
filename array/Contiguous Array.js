// time: O(n)
// space: O(n)
const findMaxLength = arr => {
  for (let i = 0; i < arr.length; i++r) {
    if (arr[i] === 0) arr[i] = -1;
  }
  const map = {
    0: -1
  };
  let sum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum in map) {
      max = Math.max(max, i - map[sum]);
    } else {
      map[sum] = i;
    }
  }
  return max;
};