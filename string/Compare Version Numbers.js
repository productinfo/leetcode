/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {

  var index = 0, v1 = version1.split('.'), v2 = version2.split('.'), t1, t2;

  while (v1[index] || v2[index]) {

    t1 = parseInt(v1[index], 10) || 0;
    t2 = parseInt(v2[index], 10) || 0;
    if (t1 < t2) {
      return -1;
    } else if (t1 > t2) {
      return 1;
    }
    index++;
  }

  return 0;

};

// 4/24/2016
const compareVersion = function(v1, v2) {

  const g1 = v1.split('.');
  const g2 = v2.split('.');
  let index = 0;

  while (g1[index] || g2[index]) {
    const d1 = +(g1[index]) || 0;
    const d2 = +(g2[index]) || 0;
    index++;
    if (d1 > d2) {
      return 1;
    } else if (d1 < d2) {
      return -1
    }
  }

  return 0;
};
