var answer1 = (function () {

  var result = null;

  return function foo (node, target) {

    if (node.nodeType === 1) {
      // console.log(node === target);
      if (node === target) result = node;

      node = node.firstChild;

      while (node) {

        foo(node, target);
        node = node.nextSibling;

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

    if (n.nodeType === 1) {

      if (n === t) result = n;

      n = n.firstChild;

      while (n) {
        dom(n, t);
        n = n .nextSibling;
      }

    }

  };

  dom(node, target);

  return result;

};

// TEST CASE //
var a1 = answer1(document.body, document.querySelector('#test'));
var a2 = answer2(document.body, document.querySelector('#test'));
