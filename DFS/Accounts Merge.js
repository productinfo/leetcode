/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const map = {};
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    for (let j = 1; j < account.length; j++) {
      map[account[j]] = map[account[j]] || [];
      map[account[j]].push(i);
    }
  }
  // console.log(map);
  const visited = [];
  const dfs = (i, emails) => {
    if (visited[i]) return;
    visited[i] = true;
    for (let j = 1; j < accounts[i].length; j++) {
      const email = accounts[i][j];
      emails.add(email);
      for (const n of map[email] || []) {
        dfs(n, emails);
      }
    }
  };
  const res = [];
  for (let i = 0; i < accounts.length; i++) {
    if (visited[i]) continue;
    const emails = new Set();
    dfs(i, emails);
    // console.log(emails);
    res.push([accounts[i][0], ...Array.from(emails).sort()]);
  }
  return res;
};
