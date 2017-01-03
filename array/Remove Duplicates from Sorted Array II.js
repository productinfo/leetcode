/**
 * @param {number[]} A
 * @return {number}
 */
var removeDuplicates = function(A) {

  var l = A.length;

  if (l <= 2) {
    return l;
  }

  var pv = 1, cur = 2;

  while (cur < l) {

    if (A[cur] === A[pv] && A[cur] === A[pv - 1]) {
      cur++;
    } else {
      A[++pv] = A[cur++];
    }

  }

  return pv + 1;

};

// 10/20/2016
const removeDuplicates = arr => {
  const len = arr.length;
  if (!len) return 0;
  let a = 1;
  let b = 2;
  while (b < len) {
    if (arr[b] === arr[a] && arr[b] === arr[a - 1]) {
      b++;
    } else {
      arr[++a] = arr[b++];
    }
  }
  return a + 1;
};

// 11/9/2016
const removeDuplicates = arr => {
	let x = 0;
	for (let l = arr.length, i = 0; i < l; i++) {
  	if (x < 2 || arr[x - 2] < arr[i]) {
    	arr[x++] = arr[i];
    }
  }
  return x
};