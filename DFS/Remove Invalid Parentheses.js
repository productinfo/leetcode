const removeInvalidParentheses = s => {
  const res = [];
  const L = '(';
  const R = ')';
  const dfs = (substr, curPos, last, compare) => {
    for (let i = curPos, cnt = 0; i < substr.length; i++) {
      if (substr[i] === compare[0]) cnt++;
      else if (substr[i] === compare[1]) cnt--;
      if (cnt >= 0) continue;
      for (let j = last; j <= i; j++) {
        if (substr[j] === compare[1] && (j === last || substr[j - 1] !== compare[1])) {
          dfs(substr.substring(0, j) + substr.substring(j + 1), i, j, compare);
        }
      }
			return;
    }
    const reverseStr = substr.split('').reverse().join('');
    if (compare[0] === L) dfs(reverseStr, 0, 0, [R, L]);
    else res.push(reverseStr);
  };
  dfs(s, 0, 0, [L, R]);
  return res;
};