/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

  var l = s.length;

  if (l === 0) {
    return 0;
  }

  var stack = [];
  var max = 0;
  var last = -1;
  var i = 0;

  for (; i < l ; i++) {

    if (s[i] === '(') {
      stack.push(i);
    } else {

      if (stack.length === 0) {
        // record the position before first left parenthesis
        last = i;

      } else {

          stack.pop();

          if (stack.length === 0) {
            // if stack is empty mean the positon before the valid left parenthesis is "last"
            max = Math.max(max, i - last);

          } else {
            // if stack is not empty, then for current i the longest valid parenthesis length is 
                      // i-stack.peek()
            max = Math.max(max, i - stack[stack.length - 1]);

          }
      }

    }

  }


  return max;
};