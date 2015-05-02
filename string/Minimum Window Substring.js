/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

  if (s === undefined || t === undefined) {
    return '';
  }

  var sl = s.length;
  var tl = t.length;

  if (sl === 0 && tl === 0) {
    return '';
  }

  if (tl > sl) {
    return '';
  }

  var needFind = {};
  var alreadyFind = {};

  var i;

  for (i = 0 ; i < tl ; i++) {

    alreadyFind[t[i]] = 0;

    if (needFind.hasOwnProperty(t[i])) {
      needFind[t[i]] += 1;
    } else {
      needFind[t[i]] = 1;
    }

  }

  var start = -1;
  var end = sl;

  var go = 0, len = 0;

  for (i = 0 ; i < sl ; i++) {

    var curChar = s[i];

    if (alreadyFind.hasOwnProperty(curChar)) {

      alreadyFind[curChar] += 1;

      if (alreadyFind[curChar] <= needFind[curChar]) {
        len++;
      }

      if (len === tl) {

        while (!needFind.hasOwnProperty(s[go]) || alreadyFind[s[go]] > needFind[s[go]]) {

          if (needFind[s[go]]) {
            alreadyFind[s[go]] -= 1;
          }

          go++;

        }

        if (i - go < end - start) {
          start = go;
          end = i;
        }

      }

    }

  }

  if (start === -1) {
    return '';
  }

  return s.substring(start, end + 1);

};