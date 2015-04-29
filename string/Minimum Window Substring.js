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

    if (alreadyFind.hasOwnProperty(s[i])) {

      alreadyFind[s[i]] += 1;

      if (alreadyFind[s[i]] <= needFind[s[i]]) {
        len++;
      }

      if (len === tl) {

        while (!needFind[s[go]] || alreadyFind[s[go]] > needFind[s[go]]) {

          if (needFind[s[go]]) {
            alreadyFind[s[go]] -= 1;
          }

          start++:

        }

        if (i - start < end - len) {
          start = go;
          end = i;
        }

      }

    }

  }

  if (start === -1) {
    return '';
  }

  return s.substring(start, end);

};