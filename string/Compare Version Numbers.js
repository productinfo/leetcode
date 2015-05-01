/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  
  var index = 0, v1 = version1.split('.'), v2 = version2.split('.'), t1, t2;

  while (v1[index] || v2[index]) {

    t1 = parseInt(v1[index] || 0);
    t2 = parseInt(v2[index] || 0);

    if (t1 < t2) {
      return -1;
    } else if (t1 > t2) {
      return 1;
    } else {

      index++;

    }

  }

  return 0;

};