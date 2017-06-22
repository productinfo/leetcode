/**
 * @param {number[]} A
 * @return {void} Do not return anything, modify A in-place instead.
 */
var sortColors = function(A) {
    
  var red = 0, blue = A.length - 1;

  while (A[red] === 0) {
    red++;
  }

  while (A[blue] === 2) {
    blue--;
  }

  var index = red;

  while (index <= blue) {

    if (A[index] === 0 && red < index) {
      swap(A, index, red++);
    } else if (A[index] === 2) {
      swap(A, index, blue--);
    } else {
      index++;
    }

  }

};

function swap (A, x, y) {
  var tmp = A[x];
  A[x] = A[y];
  A[y] = tmp;
}

// 3/26/2017
const swap = (arr, m, n) => {
  const tmp = arr[m];
  arr[m] = arr[n];
  arr[n] = tmp;  
}

const sortColors = (arr) => {
  const len = arr.length;
  let z = 0;
  let t = len - 1;
  while (z < len && arr[z] === 0) {
    z++;
  }
  while (t >= 0 && arr[t] === 2) {
    t--;
  }
  let i = z;
  while (i <= t) {
    if (arr[i] === 0 && z < i) {
      swap(arr, z++, i);
    } else if (arr[i] === 2) {
      swap(arr, t--, i);
    } else {
      i++;
    }
  }
};