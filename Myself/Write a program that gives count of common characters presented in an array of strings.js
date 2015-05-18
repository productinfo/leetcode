/**
 * Write a program that gives count of common characters presented in an array of strings..(or array of character arrays) 
 *
 * For eg.. for the following input strings.. 
 *
 * aghkafgklt
 * dfghako
 * qwemnaarkf
 *
 * The output should be 3. because the characters a, f and k are present in all 3 strings. 
 * Note: The input strings contains only lower case alphabets
 */

var common = function (strs) {

  if (!strs) {
    return 0;
  }

  var len = strs.length;

  if (len === 0) {
    return 0;
  }
  
  var i = 0, j, map = {}, first = strs[0], ll = first.length, ch, has;

  for (; i < ll ; i++) {

    ch = first[i];

    has = true;

    for (j = 1 ; j < len ; j++) {

      if (strs[j].indexOf(ch) === -1) {
        has = false;
        break;
      }

    }

    if (has) {
      map[ch] = true;
    }

  }

  return Object.keys(map);

};

console.log(common(['aghkafgklt', 'dfghako', 'qwemnaarkf']));