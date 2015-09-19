var TrieNode = function () {
  return {
    wordEnd: false,
    children: {}
  };
};

var Trie = function () {
  this.root = TrieNode();
};

Trie.prototype.insert = function (word) {

  var len = word.length,
      i = 0, next,
      r = this.root;

  while (i < len) {

    next = r.children[word[i]];

    if (next) {
      r = next;
      i++;
    } else break;

  }

  while (i < len) {
    var nt = new TrieNode();
    r.children[word[i]] = nt;
    r = nt;
    i++;
  }

  r.wordEnd = true;

};

Trie.prototype.search = function (word) {

  var char = 'abcdefghijklmnopqrstuvwxyz'.split(''),
      len = word.length;

  var dfs = function (r, pos) {

    if (!r || (pos === len && !r.wordEnd)) return false;

    if (pos === len && r.wordEnd) return true;

    if (word[pos] === '.') {

      for (var i = 0 ; i < char.length ; i++) {
        if (dfs(r.children[char[i]], pos + 1)) {
          return true;
        }
      }

      return false;

    } else {
      return dfs(r.children[word[pos]], pos + 1);
    }

  }

  return dfs(this.root, 0);
};

/**
 * @constructor
 */
var WordDictionary = function() {
  this.trie = new Trie();
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
  this.trie.insert(word);
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
  return this.trie.search(word);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
