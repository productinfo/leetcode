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

      if (n.isEqualNode(t)) {
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

var answer3 = function (node, target) {

  var r;
  var dom = function (n, t) {
    if (n.isEqualNode(t)) {
      r = n;
      return;
    }
    n = n.firstChild;
    while (n) {
      dom(n, t);
      n = n.nextSibling;
    }
  };
  dom(node, target);
  return r;

};

// TEST CASE //
var a1 = answer1(document.body, document.querySelector('#test'));
var a2 = answer2(document.body, document.querySelector('#test'));

// 5/7/2017
const get = (A, B, x) => {
  let tmp = x;
  const stack = [];
  while (tmp && !tmp.isSameNode(A)) {
    if (!tmp.parentNode) break;
    const child = tmp.parentNode.childNodes;
    for (let j = 0; j < child.length; j++) {
      if (child[j].nodeType === 1 && child[j].isSameNode(tmp)) {
        stack.push(j);
        tmp = child[j].parentNode;
        break;
      }
    }
  }
  if (!stack.length) return null;
  let cur = B;
  while (cur && stack.length) {
    cur = cur.childNodes[stack.pop()];
  }
  return cur;
};

// 5/9/2017
const z = (A, B, x) => {
  const stack = [];
  while (x && !x.isSameNode(A)) {
    if (!x.parentNode) break;
    const child = x.parentNode.childNodes;
    for (let j = 0; j < child.length; j++) {
      if (child[j].nodeType === 1 && child[j].isSameNode(x)) {
        stack.push(j);
        x = x.parentNode;
        break;
      }
    }
  }
  if (!stack.length) return null;
  while (B && stack.length) {
    B = B.childNodes[stack.pop()];
  }
  return B;
};