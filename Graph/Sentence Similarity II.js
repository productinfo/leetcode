var areSentencesSimilarTwo = function(words1, words2, pairs) {
  if (words1.length !== words2.length) return false;
  const map = {};
  for (const [w1, w2] of pairs) {
    map[w1] = map[w1] || [];
    map[w2] = map[w2] || [];
    map[w1].push(w2);
    map[w2].push(w1);
  }
  
  const dfs = (src, dst, visited) => {
    if (src === dst) return true;
    if (!(src in map)) return false;
    visited[src] = true;
    for (const next of map[src]) {
      if (next in visited) continue;
      if (dfs(next, dst, visited)) return true;
    }
    return false;
  };

  for (let j = 0; j < words1.length; j++) {
    if (!dfs(words1[j], words2[j], {})) return false;
  }
  return true;
};

// ...
var areSentencesSimilarTwo = function(words1, words2, pairs) {
  if (words1.length !== words2.length) return false;
  const map = {};
  const match = {};
  for (const [w1, w2] of pairs) {
    map[w1] = map[w1] || [];
    map[w2] = map[w2] || [];
    map[w1].push(w2);
    map[w2].push(w1);
  }
  let id = 0;
  
  const dfs = (word, iii) => {
    match[word] = iii;
    for (const next of map[word]) {
      if (next in match) continue;  
      dfs(next, iii);
    }
  };

  for (const [w1, w2] of pairs) {
    if (!(w1 in match)) dfs(w1, id++);
    if (!(w2 in match)) dfs(w2, id++);
  }
  
  for (let j = 0; j < words1.length; j++) {
    if (match[words1[j]] !== match[words2[j]]) return false;
  }

  return true;
};
