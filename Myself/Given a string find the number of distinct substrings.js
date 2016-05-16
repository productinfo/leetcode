
// http://www.quora.com/Given-a-string-how-do-I-find-the-number-of-distinct-substrings-of-the-string

/**
 * If you look through the prefixes of each suffix of a string, you have covered all substrings of that string.
 */

var get = function (str) {

  var len = str.length;

  if (len === 0) {
    return 0;
  }

  var i;

  var tmp = [];

  for (i = len - 1 ; i >= 0 ; i--) {

    tmp.push(str.substring(i));

  }

  tmp = tmp.sort();

  // console.log(tmp);

  var ans = tmp[0].length;

  for (i = 1 ; i < tmp.length ; i++) {

    ans += tmp[i].length - LCP(tmp[i], tmp[i - 1]);

  }

  return ans;

};

var LCP = function (s1, s2) {

  var l1 = s1.length, l2 = s2.length;

  if (l1 === 0 || l2 === 0) {
    return 0;
  }

  var index = 0;

  while (index < l1 && index < l2) {

    if (s1[index] === s2[index]) {
      index++;
    } else {
      return index;
    }

  }

  return l1 > l2 ? l2 : l1;

};

// console.log(LCP('ABCD', 'ABDE'));

console.log(get('BANANA'));
console.log(get('aaaa'));
console.log(get('abcd'));

// 4/16/2016
const foo = (s) => {

  const len = s.length;
  const map = {};
  let c = 0;
  for (let i = 0; i < len; i++) {
    if (map[s[i]]) continue;
    map[s[i]] = true;
    c += s.substring(i).length;
  }

  return c;
};
