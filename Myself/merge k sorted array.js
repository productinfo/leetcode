var mergeKSortedArrays = function (arrs) {

  var len = arrs.length;

  if (len === 0) {
    return [];
  } else if (len === 1) {
    return arrs[0];
  } else {
    return merge(mergeKSortedArrays(arrs.slice(0, len >> 1)), mergeKSortedArrays(arrs.slice(len >> 1)));
  }

};

var merge = function (a1, a2) {

  var l1 = a1.length,
      l2 = a2.length,
      a3 = [], c1 = 0, c2 = 0;

  while (c1 < l1 && c2 < l2) {

    if (a1[c1] < a2[c2]) {

      a3.push(a1[c1++]);

    } else {

      a3.push(a2[c2++]);

    }

  }

  while (c1 < l1) {

    a3.push(a1[c1++]);    

  }

  while (c2 < l2) {

    a3.push(a2[c2++]);    

  }

  return a3;
};