/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  
  var len = s.length, res = [];

  // if (!s || len > 12 || len < 4) {
  //   return res;
  // }

  // var ip = '';

  // var index = 0;

  // var partNum = 0;

  var dfs = function (index, partNum, ip) {

    if (index === len && partNum === 4) {
      ip = ip.substring(0, ip.length - 1);
      res.push(ip);
      return;
    }

    if (len - index < 4 - partNum) {
      return;
    }

    if (len - index < (4 - partNum) * 3) {
      return;
    }

    var n = 0;

    for (var j = index ; j < index + 3 ; j++) {

      n = n * 10 + parseInt(s[j]);

      if (n <= 255) {
        ip += s[j];
        dfs(index + 1, partNum + 1, ip + '.');
      }

      if (n === 0) {
        break;
      }

    }

  };

  dfs(0, 0, '');

  return res;

};