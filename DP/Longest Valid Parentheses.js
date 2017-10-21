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

/**

1. Scan the string from beginning to end.
 
2. If current character is '(',
push its index to the stack. If current character is ')' and the
character at the index of the top of stack is '(', we just find a
matching pair so pop from the stack. Otherwise, we push the index of
')' to the stack.

3. After the scan is done, the stack will only
contain the indices of characters which cannot be matched. Then
let's use the opposite side - substring between adjacent indices
should be valid parentheses.

4. If the stack is empty, the whole input
string is valid. Otherwise, we can scan the stack to get longest
valid substring as described in step 3.
 */
// O(n)
// 4/15/2017
const longestValidParentheses = s => {
  const len = s.length;
  let longest = 0;
  if (!len) return longest;
  const stack = [];
  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length && s[stack[stack.length - 1]] === '(') {
        stack.pop();
      } else {
        stack.push(i);      
      }
    }
  }
  if (stack.length) {
    let tail = len;
    while (stack.length) {
      let head = stack.pop();
      longest = Math.max(longest, tail - head - 1);
      tail = head;
    }
    longest = Math.max(longest, tail);
  } else {
    longest = len;
  }
  return longest;
};