var kEmptySlots = function(flowers, k) {
  if (!flowers.length) return -1;
  const pos = [];
  let max = Infinity;
  for (let i = 0; i < flowers.length; i++) {
    pos[flowers[i] - 1] = i + 1;
  }
  // console.log(pos);
  let left = 0;
  let right = k + 1;
  for (let i = 0; right < pos.length; i++) {
    if (pos[i] > pos[left] && pos[i] > pos[right]) {
      continue;
    }
    if (i === right) {
      max = Math.min(max, Math.max(pos[left], pos[right]));
    }
    left = i;
    right = i + k + 1;
  }
  return max === Infinity ? -1 : max;
};
