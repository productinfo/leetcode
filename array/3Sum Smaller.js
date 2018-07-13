var threeSumSmaller = function(nums, target) {
    let total = 0;
    const len = nums.length;
    if (!len) return total;
    nums.sort((a, b) => a - b);
    for (let a = 0; a < len - 2; a++) {
          let b = a + 1;
          let c = len - 1;
          while (b < c) {
                  const sum = nums[a] + nums[b] + nums[c];
                  if (sum < target) {
                            total += (c - b);
                            b++;
                          } else {
                                    c--;
                                  }
                }
        }
    return total;
};
