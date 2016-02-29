Array.prototype.map = function (projection, context) {

  var result = []

  this.forEach(function (item) {
    result.push(projection.call(context, item));
  });

  return result;

};

var map = function (arr, iterator) {

  var i = 0, len = arr.length, result = [];

  for (; i < len ; i++) {
    result.push(iterator(arr[i]));
  }

  return result;

};
