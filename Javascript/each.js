var _each = function (arr, iterator) {

  var len = arr.length;

  for (var i = 0 ; i < len ; i++) {
    iterator(arr[i], i, arr);
  }

};