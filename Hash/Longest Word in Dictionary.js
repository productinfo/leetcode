var longestWord = function(words) {
  const trie = new Trie();
  words.forEach(w => trie.insert(w));
  let res = '';
  let ans = '';
  const dfs = node => {
    if (!node.end) return;
    if (Object.keys(node.children).length === 0) {
      ans = res;
      return;
    }
    for (const ch in node.children) {
      if (node.children[ch].end) {
        res += ch;
        dfs(node.children[ch]);
        res = res.slice(0, res.length - 1);
      }
    }
  }
  for (const ch in trie.root.children) {
    if (trie.root.children[ch].end) {
      res += ch;
      dfs(trie.root.children[ch]);
      res = res.slice(0, res.length - 1);
    }
  }
  return ans;
};

//

// 1. sort words
var longestWord = function(words) {
  words.sort();
  const map = {};
  let res = '';
  for (const w of words) {
    if (w.length === 1 || (w.slice(0, w.length - 1) in map)) {
      res = w.length > res.length ? w : res;
      map[w] = 0;
    }
  }
  return res;
};
