
// http://bost.ocks.org/mike/shuffle/

var shuffle = function (arr) {

  var len = arr.length, index, tmp;

  while (len) {

    // get random index
    index = Math.floor(Math.random() * len--);

    // swap with front element
    tmp = arr[len];
    arr[len] = arr[index];
    arr[index] = tmp;
  }

  return arr;
};