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