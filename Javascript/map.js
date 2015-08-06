Array.prototype.map = function (projection) {

  var result = []

  this.forEach(function (item) {
    result.push(projection(item));
  });

  return result;

};

var map = function (arr, iterator) {
  
};