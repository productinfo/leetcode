var canTransform = function(start, end) {
  if (
    start.replace(/X/g, '') !== end.replace(/X/g, '')
  ) return false;

  let i = 0;
  let j = 0;

  while (i < start.length && j < end.length) {

    while (i < start.length && start[i] === 'X') i++;

    while (j < end.length && end[j] === 'X') j++;

    if (start[i] === 'L' && j > i) return false;

    if (start[i] === 'R' && i > j) return false;

    i++;
    j++;
  }

  return true;
};
