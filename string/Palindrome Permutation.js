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
