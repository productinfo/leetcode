// Trie
const node = () => ({
  end: false,
  children: {}
});

class Trie {
  constructor(arr = []) {
    this.root = node();
    arr.forEach(w => this.insert(w));
  }

  insert(word) {
    let cur = this.root;
    let i = 0;
    const len = word.length;
    while (i < len) {
      const next = cur.children[word[i]];
      if (next) {
        cur = next;
        i++;
      } else {
        break;
      }
    }
    while (i < len) {
      const x = node();
      cur.children[word[i]] = x;
      cur = x;
      i++;
    }
    cur.end = true;
  }

  _find(w) {
    let cur = this.root;
    const len = w.length;
    let i = 0;
    while (i < len) {
      const next = cur.children[w[i]];
      if (next) {
        cur = next;
        i++;
      } else {
        return null;
      }
    }
    return cur;
  }

  search(prefix) {
    const res = [];
    const n = this._find(prefix);
    let tmp = '';
    const dfs = p => {
      if (p.end) {
        res.push(tmp);
        return;
      }
      for (const k in n.children) {
        tmp += k;
        dfs(n.children[k]);
        tmp = tmp.slice(0, tmp.length - 1);
      }
    }
    dfs(n);
    return res;
  }

  pref(w) {
    const res = [];
    const n = this._find(w)
    if (!n) return res;
    let tmp = '';
    const dfs = p => {
      if (!p) return;
      if (p.end) {
        res.push(w + tmp);
      }
      for (const k in p.children) {
        tmp += k;
        dfs(p.children[k]);
        tmp = tmp.slice(0, tmp.length - 1);
      }
    };
    dfs(n);
    return res;
  }
}

var wordSquares = function(words) {
  const res = [];
  if (!words.length) return res;
  const trie = new Trie(words);
  const len = words[0].length;
  const tmp = [];
  const dfs = (word, level) => {
    if (tmp.length === len) {
      res.push(tmp.slice());
      return;
    }
		let prefix = '';
    for (let j = 0; j < tmp.length; j++) {
    	prefix += tmp[j][level];
    }
    const list = trie.pref(prefix);
    for (const p of list) {
      tmp.push(p);
      dfs(p, level + 1);
      tmp.pop();
    }
  };
  for (const w of words) {
    tmp.push(w);
		dfs(w, 1);
    tmp.pop();
  }
  return res;
};

// 4/27/2018
const trieNode = _ => ({
  children: {},
  end: false
});

class Trie {
  constructor() {
    this.root = trieNode();
  }

  insert(w) {
    let cur = this.root;
    let i = 0;
    const len = w.length;
    while (i < len) {
      const next = cur.children[w[i]];
      if (next) {
        cur = next;
        i++;
      } else {
        break;
      }
    }

    while (i < len) {
      const node = trieNode();
      cur.children[w[i++]] = node;
      cur = node;
    }

    cur.end = true;
  }

  getNode(w) {
    let cur = this.root;
    let i = 0;
    const len = w.length;
    while (i < len) {
      const next = cur.children[w[i]];
      if (next) {
        cur = next;
        i++;
      } else {
        return null;
      }
    }

    return cur;
  }

  find(prefix) {
    const node = this.getNode(prefix);
    const res = [];
    let tmp = '';
    const dfs = n => {
      if (!n) return;
      if (n.end) {
        res.push(`${prefix}${tmp}`);
      }
      for (const child in n.children) {
        tmp += child;
        dfs(n.children[child]);
        tmp = tmp.slice(0, tmp.length - 1);
      }
    };
    dfs(node);
    return res;
  }
}


/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function(words) {
  const res = [];
  const len = words[0].length;
  if (!len) return res;
  const trie = new Trie();
  words.forEach(w => trie.insert(w));
  const tmp = [];
  const dfs = level => {
    if (tmp.length === len) {
      res.push(tmp.slice());
      return;
    }
    
    let prefix = '';
    for (let k = 0; k < tmp.length; k++) {
      prefix += tmp[k][level];
    }

    const possible = trie.find(prefix);
    for (const p of possible) {
      tmp.push(p);
      dfs(level + 1);
      tmp.pop();
    }
  };
  for (const w of words) {
    tmp.push(w);
    dfs(1);
    tmp.pop();
  }
  return res;
};
