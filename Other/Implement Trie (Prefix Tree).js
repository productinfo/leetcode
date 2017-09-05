// time: O(n)
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

// 4/25/2016
const TrieNode = () => {
  return {
    end: false,
    children: {}
  };
};

var Trie = function() {
    this.root = TrieNode();
};

class Trie {
  constructor() {
    this.root = TrieNode();
  }

  find(r, w) {
    const l = w.length;
    let p = r;
    for (let i = 0; i < l; i++) {
      const children = p.children[w[i]];
      if (children) {
        p = children;
      } else {
        return false;
      }
    }
    return p;
  }

  insert(word) {
    let p = this.root;
    let i = 0, l = word.length;

    while (i < l) {
      const next = p.children[word[i]];
      if (next) {
        p = next;
        i++;
      } else {
        break;
      }
    }

    while (i < l) {
      const newTrie = TrieNode();
      p.children[word[i]] = newTrie;
      p = newTrie;
      i++;
    }

    p.end = true;
  }

  search(word) {
    const p = this.find(this.root, word);
    return p && p.end;
  }

  startsWith(prefix) {
    const p = this.find(this.root, prefix);
    return !!p;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */

 // 9/24/2016
 const TrieNode = () => ({
   end: false,
   children: {}
 });

 class Trie {
   constructor() {
     this.root = TrieNode();
   }

   // return TrieNode or NULL
   _find(node, word) {
     let cur = node;
     const len = word.length;
     for (let i = 0; i < len; i++) {
       const children = cur.children[word[i]];
       if (children) {
         cur = children
       } else {
         return;
       }
     }
     return cur;
   }

   insert(word) {
     const len = word.length;
     let cur = this.root;
     let i = 0;
     while (i < len) {
       const children = cur.children[word[i]];
       if (children) {
         cur = children;
         i++;
       } else {
         break;
       }
     }

     while (i < len) {
       const n = TrieNode();
       cur.children[word[i++]] = n;
       cur = n;
     }

     cur.end = true;
   }

   search(word) {
     const p = this._find(this.root, word);
     return p && p.end;
   }

   startsWith(prefix) {
     return !!this._find(this.root, prefix);
   }
 }

// 3/30/2017
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
      const children = cur.children[word[i]];
      if (children) {
        cur = children;
        i++;
      } else {
        break;
      }
    }
    
    while (i < len) {
      let n = trieNode();
      cur.children[word[i++]] = n;
      cur = n;
    }
    cur.end = true;
  }


  _find(r, w) {
    let cur = r;
    for (const c of w) {
      const children = cur.children[c];
      if (children) {
        cur = children;
      } else {
        return null;
      }
    }
    return cur;
  }

  search(word) {
    const p = this._find(this.root, word);
    return p ? p.end : false;
  }

  startsWith(prefix) {
    const p = this._find(this.root, prefix);
    return !!p;
  }
}

// 8/17/2017
const trieNode = _ => ({
  end: false,
  children: {}
});

class Trie {
  constructor() {
    this.root = trieNode();
  }
 
  insert(word) {
    const len = word.length;
    let index = 0;
    let cur = this.root;
    while (index < len) {
      const next = cur.children[word[index]];
      if (next) {
        cur = next;
        index++
      } else {
        break;
      }
    }
    while (index < len) {
      const node = trieNode();
      cur.children[word[index++]] = node;
      cur = node;
    }
    cur.end = true;
  }

  _find(w) {
    let cur = this.root;
    for (const ch of w) {
      const next = cur.children[ch];
      if (next) {
        cur = next;
      } else {
        return null;
      }
    }
    return cur;
  }

  search(word) {
    const p = this._find(word);
    return p ? p.end : false;
  }

  startsWith(prefix) {
    const p = this._find(prefix);
    return !!p;
  }
}