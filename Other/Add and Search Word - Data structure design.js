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

// 4/12/2017
const trieNode = _ => ({
  children: {},
  end: false
});

class Trie {
  constructor() {
    this.root = trieNode();
    this.char = 'abcdefghijklmnopqrstuvwxyz'.split('');
  }

  // O(n)
  insert(word) {
    let cur = this.root;
    let i = 0;
    let len = word.length;
    while (i < len) {
      let ch = cur.children[word[i]];
      if (ch) {
        cur = ch;
        i++;
      } else {
        break;
      }
    }
    while (i < len) {
      const n = trieNode();
      cur.children[word[i++]] = n;
      cur = n;
    }
    cur.end = true;
  }  

  search(word) {
    const len = word.length;
    const _dfs = (r, pos) => {
      if (!r || (
        pos === len && !r.end
      )) return false;
      if (pos === len && r.end) return true;
      if (word[pos] === '.') {
        for (let k = 0; k < this.char.length; k++) {
          if (_dfs(
            r.children[this.char[k]],
            pos + 1
          )) {
            return true;
          }
        }
        return false;
      } else {
        return _dfs(r.children[word[pos]], pos + 1);
      }
    };
    return _dfs(this.root, 0);
  }
}

class WordDictionary {
  constructor() {
    this.trie = new Trie();
  }

  addWord(word) {
    this.trie.insert(word);
  }

  search(word) {
    return this.trie.search(word);
  }
}

// better one
// space: O(n)
class WordDictionary {
  constructor() {
    this.map = {};
  }

  // O(1)
  addWord(word) {
    const len = word.length;
    if (len in this.map) {
      this.map[len].push(word);
    } else {
      this.map[len] = [word];
    }
  }

  isMatch(w1, w2) {
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== '.' && w1[i] !== w2[i]) return false;
    }
    return true;
  }

  // O(n)
  search(word) {
    const len = word.length;
    if (!(len in this.map)) return false;
		let res = 0;
    for (const w of this.map[len]) {
      if (this.isMatch(word, w)) {
				res += 1;
      }
    }
    return res > 0;
  }
}

// 4/15/2017
class WordDictionary {
  constructor() {
    this.map = {};
  }

  addWord(word) {
    const len = word.length;
    if (len in this.map) this.map[len].push(word);
    else this.map[len] = [word];
  }

  isMatch(w1, w2) {
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== w2[i] && w2[i] !== '.') {
        return false;
      }
    }
    return true;
  }

  search(word) {
    const len = word.length;
    if (!(len in this.map)) return false;
    for (const w of this.map[len]) {
      if (this.isMatch(w, word)) return true;
    }
    return false;
  }
}

// 4/20/2017
class WordDictionary {
  constructor() {
    this.map = {};
  }
  addWord(w) {
    const l = w.length;
    if (l in this.map) this.map[l].push(w);
    else this.map[l] = [w];
  }
  match(w1, w2) {
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== w2[i] && w1[i] !== '.') {
        return false;
      }
    }
    return true;
  }
  search(w) {
    const l = w.length;
    if (l in this.map) {
      for (const word of this.map[l]) {
        if (this.match(w, word)) return true;
      }
    }
    return false;
  }
}