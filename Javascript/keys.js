var keys = function (obj) {
  if (Object.keys) {
    return Object.keys(obj);
  }

  var result = [];

  for (var k in obj) {

    if (obj.hasOwnProperty(k)) {
      result.push(k);
    }

  }

  return result;
};