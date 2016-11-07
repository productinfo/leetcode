var Object.assign = Object.assign || function (target) {

  if (target === undefined || target == null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target), len = arguments.length, i = 1;

  for (; i < len ; i++) {

    var nextSource = arguments[i];

    if (!nextSource) continue;

    var nextSource = Object(nextSource),
        keysArray = Object.keys(nextSource);

    for (var index = 0, ll = keysArray.length ; index < ll ; index++) {

      var nextKey = keysArray[index],
          desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

      if (desc && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }

    }
    
  }

  return to;

};

// 11/4/2016
const oa = (target, ...args) => {
  if (target === null) {
    throw new Error('...');
  }
  const result = Object(target);
  args.forEach(
    arg => Object.keys(arg).forEach(
    	key => result[key] = arg[key]
    )
  );
  return result;
};
