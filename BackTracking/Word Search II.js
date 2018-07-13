/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
    return {
      isWordEnd: false,
      children: {}
    };
};

var Trie = function() {
    this.root = TrieNode();
};

var find = function (r, w) {

  var p = r;
  var i = 0;
  var len = w.length, child;

  for (; i < len ; i++) {

    child = p.children[w[i]];

    if (child) {
      p = child;
    } else {
      return false;
    }

  }

  return p;

};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {

  var p = this.root;
  var i = 0, n = word.length;

  while (i < n) {
    var next = p.children[word[i]];

    if (next) {
      p = next;
      i++;
    } else {
      break;
    }

  }

  while (i < n) {
    var newT = TrieNode();
    p.children[word[i]] = newT;
    p = newT;
    i++;
  }

  p.isWordEnd = true;

};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {

  var p = find(this.root, word);
  return p && p.isWordEnd;

};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {

  var p = find(this.root, prefix);
  return !!p;

};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {

  var len = words.length,
      yl = board.length,
      xl = board[0].length,
      i = 0, y, x,
      trie = new Trie(),
      visited = [],
      res = [];

  for (y = 0 ; y < yl ; y++) {
    visited.push([]);
  }

  for (; i < len ; i++) {
    trie.insert(words[i]);
  }

  var dfs = function (i, j, sub) {

    if (i < 0 || j || 0 || i > xl || j > yl || visited[j][i]) return;

    sub += board[j][i];

    if (!trie.startsWith(sub)) return;

    if (trie.search(sub)) res.push(sub);

    visited[j][i] = true;
    dfs(i + 1, j, sub);
    dfs(i - 1, j, sub);
    dfs(i, j + 1, sub);
    dfs(i, j - 1, sub);
    visited[j][i] = false;
  };

  for (y = 0 ; y < yl ; y++) {
    for (x = 0 ; x < xl ; x++) {
      dfs(x, y, '');
    }
  }

  return res;

};

// 9/24/2016
var findWords = function(board, words) {
  const yl = board.length;
  const xl = board[0].length;
  const res = [];
  const go = (x, y, str) => {
    if (
      x < 0 ||
      y < 0 ||
      x > xl ||
      y > yl
    ) {
      return;
    }

    str = str + board[y][x];

    const hasMatched = words.some(word => word.startsWith(str));

    if (!hasMatched) return;

    const matched = words.some(word => word === str);

    if (matched) {
      res.push(matched);
      return;
    }

    go(x + 1, y, str + board[y][x]);
    go(x - 1, y, str + board[y][x]);
    go(x, y + 1, str + board[y][x]);
    go(x, y - 1, str + board[y][x]);
  };

  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      go(x, y, board[y][x]);
    }
  }

  return res;
};

// 3/24/2018
// DFS + Trie
const trieNode = _ => ({
  end: false,
  children: {}
});

class Trie {
  constructor() {
    this.root = trieNode();
  }

  insert(word) {
    let cur = this.root;
    let i = 0;
    const len = word.length;
    while (i < len) {
      let next = cur.children[word[i]];
      if (next) {
        // has prefix in the trie
        cur = next;
        i++;
      } else {
        break;
      }
    }
    while (i < len) {
      const node = trieNode();
      cur.children[word[i++]] = node;
      cur = node;
    }
    cur.end = true;
  }

  _find(str) {
    let cur = this.root;
    for (const ch of str) {
      const next = cur.children[ch];
      if (next) cur = next;
      else return null;
    }
    return cur;
  }

  serach(word) {
    const p = this._find(word);
    return p ? p.end : false;
  }

  startsWith(prefix) {
    const p = this._find(prefix);
    return !!p;
  }
}

// s[]
const findWords = (b, ws) => {
  const res = [];
  const map = {};
  if (!b) return res;
  const yl = b.length;
  if (!yl) return res;
  const xl = b[0].length;
  const trie = new Trie();
  for (const w of ws) trie.insert(w);

  const opts = [
    { i: 1, j: 0 },
    { i: -1, j: 0 },
    { i: 0, j: 1 },
    { i: 0, j: -1 }
  ];

  const dfs = (i, j, str) => {
    if (!trie.startsWith(str)) return;
    if (trie.serach(str)) {
      map[str] = 0;
    }
    for (const opt of opts) {
      const m = i + opt.i;
      const n = j + opt.j;
      if (
        m >= 0 && n >= 0 && m < xl && n < yl && b[n][m] !== ''
      ) {
        const ch = b[n][m];
        b[n][m] = '';
        dfs(m, n, str + ch);
        b[n][m] = ch;
      }
    }
  };

  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (trie.startsWith(b[y][x])) {
        const ch = b[y][x];
        b[y][x] = '';
        dfs(x, y, ch);
        b[y][x] = ch;
      }
    }
  }
  return Object.keys(map);
};

// 6/4/2018
var findWords = function(board, words) {
  const res = new Set();
  if (!board) return res;
  const yl = board.length;
  if (!yl) return res;
  const xl = board[0].length;
  const trie = new Trie();
  for (const w of words) trie.insert(w);
  const opts = [
    { i: 1, j: 0 },
    { i: -1, j: 0 },
    { i: 0, j: 1 },
    { i: 0, j: -1 }
  ];
  
  const dfs = (i, j, str) => {
    if (i < 0 || j < 0 || i >= xl || j >= yl || board[j][i] === '') return;
    const ch = board[j][i];
    str += ch;
    if (!trie.startsWith(str)) return;
    if (trie.serach(str)) res.add(str);
    board[j][i] = '';
    opts.forEach(({ i: x, j: y }) => dfs(x + i, y + j, str));
    board[j][i] = ch;
  };

  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      dfs(x, y, '');
    }
  }
  return [...res];
};
