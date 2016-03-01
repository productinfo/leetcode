var answer1 = (function () {

  var result = null;

  return function foo (node, target) {

    var tmp;

    if (node.nodeType === 1) {

      if (node === target) {
        return node;
      }

      node = node.firstChild;

      while (node) {

        tmp = foo(node, target);

        if (tmp) {
          return tmp;
        } else {
          node = node.nextSibling;
        }

      }

    }

    return result;
  };
})();

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

var answer2 = function (node, target) {

  var result = null;

  var dom = function (n, t) {

    var tmp;

    if (n.nodeType === 1) {

      if (n === t) {
        return n;
      }

      n = n.firstChild;

      while (n) {
        tmp = dom(n, t);
        if (tmp) {
          return tmp;
        } else {
          n = n .nextSibling;
        }

      }

    }

  };

  return dom(node, target);

};

// TEST CASE //
var a1 = answer1(document.body, document.querySelector('#test'));
var a2 = answer2(document.body, document.querySelector('#test'));
