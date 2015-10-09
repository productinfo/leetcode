var domWalker = function (node) {

  if (node.nodeType == 1) {

      node = node.firstChild;

      while (node) {
          domWalker(node);
          node = node.nextSibling;
      }
  }

};
