/**
 * Given a string, determine if a permutation of the string could form a palindrome.
 * For example,
 * "code" -> False, "aab" -> True, "carerac" -> True.
 */

 var canPermutePalindrome = function (str) {

   var len = str.length;

   if (len === 0) return true;

   var map = {}, i = 0;

   for (; i < len ; i++) {

     if (map.hasOwnProperty(str[i])) {
       map[str[i]]++;
     } else {
       map[str[i]] = 1;
     }

   }


 	var even = 0

 	for (var item in map) {

 		if (map[item] % 2 !== 0) even++;

 	}

   return len % 2 === 0 ? even === 0 : even === 1;

 };

//////////////////////////////////////////
//////////////////////////////////////////

var canPermutePalindrome = function (str) {

  var len = str.length;

  if (len === 0) return true;

  var i = 1, newStr;

  for (; i < len ; i++) {

    newStr = str.substring(i) + str.substring(0, i);
    if (is(newStr)) return true;

  }

  return false;

};

var is = function (str) {

  var i = 0, j = str.length - 1;

  while (i < j) {

    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }

  }

  return true;

};

// 9/16/2016
const fb = (str) => {
  const len = str.length;
  if (!len) return false;
  const map = {};
  for (let i = 0; i < len; i++) {
    if (str[i] in map) {
      map[str[i]]++;
    } else {
      map[str[i]] = 1;
    }
  }
  let even = 0;
  Object.keys(map).forEach(k => {
    if (map[k] % 2 !== 0) {
      even++;
    }
  });
	return len % 2 === 0 ? even === 0 : even === 1;
};

// 10/24/2016
const f = str => {
  const len = str.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    if (map[str[i]]) {
      delete map[str[i]];
    } else {
      map[str[i]] = 1;
    }
  }
  // const l = Object.keys(map).length;
  // let odd = Object.keys(map).reduce((total, key) => (map[key] % 2 !== 0 && total++, total), 0);
  return Object.keys(map).length <= 1;
};

// 10/25/2016
const f = s => {
  const len = s.length;
  if (!len) return '';
  const map = {};
  let odd = 0;
  for (let i = 0; i < len; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
    odd += map[s[i]] % 2 === 0 ? -1 : 1;
  }
  return odd <= 1;
};
