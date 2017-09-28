/**
 * @param {string} start
 * @param {string} end
 * @param {set} dict
 * @return {string[][]}
 */
var findLadders = function(start, end, dict) {

  if (!beginWord || !endWord || !wordDict || dict.length === 0) {
    return 0;
  }

  var chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var charsLen = chars.length;

  dict.add(endWord);

  var wordQ = [];

  wordQ.push(beginWord);

  var res = [];
  var i, j;

  while (wordQ.length > 0) {

    var currWord = wordQ.shift();

    if (currWord === endWord) {
      // res = Math.min(res, currTotal);
    }

    var cl = currWord.length;


    for (i = 0 ; i < cl ; i++) {

      for (j = 0 ; j < charsLen ; j++) {

        var newWord = currWord.substring(0, i) + chars[j] + currWord.substring(i + 1);

        if (dict.has(newWord)) {
          wordQ.push(newWord);
          dict.delete(newWord);
        }


      }

    }

  }

  return res;

};

// TIMEOUT
const findLadders = (beginWord, endWord, wordList) => {
  const nodeNeighbors = {};
  const distance = {};
	wordList.push(beginWord);
  const char = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const getNeighbors = (w) => {
    const r = [];
    for (let j = 0; j < char.length; j++) {
      for (let i = 0; i < w.length; i++) {
        const newWord = `${w.substring(0, i)}${char[j]}${w.substring(i + 1)}`;
        if (wordList.includes(newWord) && newWord !== w) {
          r.push(newWord);
        }
      }
    }
    return r;
  };
  // BFS: Trace every node's distance from the start node (level by level).
  const bfs = () => {
    for (const w of wordList) {
      nodeNeighbors[w] = [];
    }
    const q = [beginWord];
    distance[beginWord] = 0;
    while (q.length) {
      const size = q.length;
      let gotEnd = false;
      for (let i = 0; i < size; i++) {
        const w = q.shift();
        const curDistance = distance[w];
        const neighbors = getNeighbors(w);
        for (const nb of neighbors) {
					nodeNeighbors[w].push(nb);
          if (!(nb in distance)) {
            distance[nb] = curDistance + 1;
            if (endWord === nb) {
              gotEnd = true;
            } else {
              q.push(nb);
            }
          }
        }
        if (gotEnd) break;
      }
    }
  };
  const res = [];
  const sub = [];
  const dfs = (cur) => {
    sub.push(cur);
    if (cur === endWord) {
      res.push(sub.slice());
    } else {
      for (const next of nodeNeighbors[cur]) {
        if (distance[next] === distance[cur] + 1) {
          dfs(next);
        }
      }
    }
    sub.pop();
  };
  bfs();
  dfs(beginWord);
  return res;
};

const x = findLadders('hit', 'cog', ["hot","dot","dog","lot","log","cog"]);
console.log(x);

// 5/27/2017
var findLadders = function(beginWord, endWord, wordList) {
  const s1 = [beginWord];
  const s2 = [endWord];
  const distance = {};
	const nodeNeighbors = {};
  const char = 'abcdefghijklmnopqrstuvwxyz'.split('');
	wordList.push(beginWord);
  const getNeighbors = w => {
    const res = [];
    for (let i = 0; i < w.length; i++) {
      for (let j = 0; j < char.length; j++) {
        const newWord = `${w.substring(0, i)}${char[j]}${w.substring(i + 1)}`;
        if (wordList.includes(newWord)) {
          res.push(newWord);
        }
      }
    }
    return res;
  };
  const bfs = () => {
		// debugger;
    for (const str of wordList) {
      nodeNeighbors[str] = [];
    }
    const q = [beginWord];
    distance[beginWord] = 0;
    while (q.length) {
      const size = q.length;
      let found = false;
      for (let k = 0; k < size; k++) {
        const w = q.shift();
        let curDistance = distance[w] || 0;
        const neighbors = getNeighbors(w);
        for (const n of neighbors) {
          nodeNeighbors[w].push(n);
          if (!(n in distance)) {
            distance[n] = curDistance + 1;
            if (n === endWord) found = true;
            else q.push(n);
          }
        }
      }
      if (found) break;
    }
  };
  bfs();
  console.log(distance);
	console.log(nodeNeighbors);
  const res =  [];
  const sub = [];
  const dfs = (cur) => {
    sub.push(cur);
    if (cur === beginWord) {
      res.push(sub.slice());
    } else {
      for (const next of nodeNeighbors[cur]) {
        if (distance[next] === distance[cur] + 1) {
          dfs(next);
        }
      }
    }
    sub.pop();
  }
  dfs(beginWord);
};
console.log(findLadders(
  'hit',
  'cog',
  ["hot","dot","dog","lot","log","cog"]
));