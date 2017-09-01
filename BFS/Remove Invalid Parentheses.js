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

// TIMEOUT
// BFS
// O(2 ^ n)
// n x 2^(n-1).
const valid = ss => {
  let count = 0;
  for (const c of ss) {
    if (c === '(') count += 1;
    if (c === ')') {
      if (count === 0) return false;
      count -= 1;
    }
  }
  return count === 0;
};
  
const removeInvalidParentheses = s => {
  const res = [];
  if (s === null) return res;
  const visited = [s];
  const q = [s];
  let found = false;
	// debugger;
  while (q.length) {
    const str = q.shift();
    if (valid(str)) {
      res.push(str);
      found = true;
    }
    if (found) continue;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === ')') {
        const subs = `${str.substring(0, i)}${str.substring(i + 1)}`;
        if (!visited.includes(subs)) {
          q.push(subs);
          visited.push(subs)
        }
      }
    }
  }

  return res;
};