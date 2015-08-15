Array.prototype.filter = function (cb) {

  var result = [];

  this.forEach(function (item) {
    if (cb(item)) {
      result.push(item);
    }
  });

  return result;

};
