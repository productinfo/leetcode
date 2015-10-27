/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {

  var len = input.length, res = [];

  if (len === 0) return res;

  var i = 0, part1, part2, m, n, ml, nl;

  for (; i < len ; i++) {

    if (input[i] !== '+' && input[i] !== '-' && input[i] !== '*') continue;

    part1 = diffWaysToCompute(input.substring(0, i));
    part2 = diffWaysToCompute(input.substring(i + 1));

    ml = part1.length;
    nl = part2.length;

    for (m = 0 ; m < ml ; m++) {

      for (n = 0 ; n < nl ; n++) {

        if (input[i] === '+') res.push(parseInt(part1[m], 10) + parseInt(part2[n], 10));
        else if (input[i] === '-') res.push(parseInt(part1[m], 10) - parseInt(part2[n], 10));
        else if (input[i] === '*') res.push(parseInt(part1[m], 10) * parseInt(part2[n], 10));

      }

    }

  }

  if (res.length === 0) res.push(parseInt(input, 10));

  return res;

};
