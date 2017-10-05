/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

  var map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  var res = [], len = digits.length, sub = '';

  if (len === 0) {
    return res;
  }

  var go = function (start) {

    if (start === len) {
      res.push(sub);
      return;
    }

    // digits[start] -> 2, 3

    var x = map[digits[start]],
        xl = x.length;

    for (var i = 0 ; i < xl ; i++) {

      sub += x[i];
      go(start + 1);
      sub = sub.substring(0, sub.length - 1);

    }

  };

  go(0);

  return res;

};

// 3/1/2016
var letterCombinations = function(digits) {
	var r = [];
	if (!digits) return r;
	var len = digits.length;
	if (len === 0) return r;
	var sub = '';
	var dfs = function (index) {
	  if (index === len) {
			// return
			r.push(sub);
			return;
		}

		var t = map[digits[index]],
				i = 0,
				l = t.length;

    for(; i < l ; i++) {
			sub += t[i];
			dfs(index + 1);
			sub = sub.slice(0, -1);
		}

	};

	dfs(0);
	return r;
};

// 4/24/2016
var letterCombinations = function(digits) {

  const r = [], sub = [];
  const l = digits.length;

  const dfs = (index) => {

    if (index === l) {
      r.push(sub.join(''));
      return;
    }

    const char = map[digits[index]];

    for (let i = 0; i < char.length; i++) {
      sub.push(char[i]);
      dfs(index + 1);
      sub.pop();
    }

  };

  dfs(0);

  return r;

};

// 9/16/2016
var letterCombinations = function(digits) {
  const res = [];
  const len = digits.length;
  if (!len) return res;
  const sub = [];
  const dfs = (index) => {
    if (index === len) {
      res.push(sub.join(''));
      return;
    }
    const char = map[digits[index]];
    for (let i = 0; i < char.length; i++) {
      sub.push(char[i]);
      dfs(index + 1);
      sub.pop();
    }
  };
  dfs(0);
  return res;
};

// 3/28/2017
// O(n ^ m)
// n is how many characters for each digits
// m is how many input digits

const letterCombinations = arr => {
  const res = [];
  const len = arr.length;
  if (!len) return res;
  const sub = [];
  const dfs = start => {
    if (sub.length === len) {
      res.push(sub.join(''));
      return;
    }
    const chars = map[arr[start]];
    for (let i = 0; i < chars.length; i++) {
      sub.push(chars[i]);
      dfs(start + 1);
      sub.pop();
    }
  };
  dfs(0);
  return res;
};

// 4/12/2017
const letterCombinations = digits => {
  const res = [];
  const len = digits.length;
  if (!len) return res;
  const sub = [];
  const dfs = index => {
    if (index === len) {
      res.push(sub.join(''));
      return;
    }
    const char = map[digits[index]];
    for (const c of char) {
      sub.push(c);
      dfs(index + 1);
      sub.pop();
    }
  };
  dfs(0);
  return res;
};

// 8/15/2017
// recursive
// O(n ^ 2L)
const map = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz"
};

const letterCombinations = digits => {
  const len = digits.length;
  const res = [];
  if (len === 0) return res;
  if (len === 1) return map[digits].split('');
  const partial = letterCombinations(digits.substring(1, len));
  for (const first of map[digits[0]].split('')) {
    for (const rest of partial) {
      res.push(first + rest);
    }
  }
  return res;
};