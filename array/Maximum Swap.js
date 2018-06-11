var maximumSwap = function(num) {
  const char = ('' + num).split('').map(ch => +ch);
  let left = -1;
  let right = -1;
  for (let i = 1; i < char.length; i++) {
    if (left < 0 && char[i] > char[i - 1]) {
      left = i - 1;
      right = i;
    }
    for (let j = left - 1; j >= 0 && char[i] > char[j]; j--) {
      left = j;
    }
    if (right >= 0 && char[i] >= char[right]) {
      right = i;
    }
  }
  if (left >= 0) {
    const tmp = char[left];
    char[left] = char[right];
    char[right] = tmp;
  }
  return +char.join('');
};
