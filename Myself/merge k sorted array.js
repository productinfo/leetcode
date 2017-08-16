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

// 11/27/2016
const merge = (a1, a2) => {
  let i = 0;
  let j = 0;
  const l1 = a1.length;
  const l2 = a2.length;
  let a3 = [];
  while (i < l1 && j < l2) {
    if (a1[i] < a2[j]) {
      a3.push(a1[i++]);
    } else {
      a3.push(a2[j++]);
    }
  }
  if (i < l1) {
  	a3 = [...a3, ...a1.slice(i - 1)];
  } else if (j < l2) {
  	a3 = [...a3, ...a2.slice(j - 1)];
  }
  return a3;
};

const mk = lists => {
  const len = lists.length;
  if (len === 0) {
    return [];
  } else if (len === 1) {
    return lists[0];
  } else {
    return merge(mk(lists.slice(0, len >> 1)), mk(lists.slice(len >> 1)));
  }
};