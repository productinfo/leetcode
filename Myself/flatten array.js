var flatten = (function () {

  var result = [];

  return function rec (arr) {

    var i = 0, len = arr.length;

    for (; i < len ; i++) {

      if (Object.prototype.toString.call(arr[i]) === '[object Array]') {

        rec(arr[i]);

      } else {

        result.push(arr[i]);

      }
    }

    return result;

  };

})();