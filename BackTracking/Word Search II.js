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
