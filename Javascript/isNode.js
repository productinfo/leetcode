// determine if input is DOM node or not

// es5
var isNode = function (obj) {

  return !!(obj &&
    (typeof Node === 'function'
      ? obj instanceof Node
      : typeof obj === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string'));

};
