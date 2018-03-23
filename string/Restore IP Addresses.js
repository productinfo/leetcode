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

// 3/22/2018
// DFS
// 25525511135
// ["255.255.11.135", "255.255.111.35"]
const valid = s => {
  if (!s.length) return false;
  if (s[0] === '0') return s === '0';
  const digit = parseInt(s, 10);
  if (isNaN(digit)) return false;
  return digit > 0 && digit <= 255;
};

const restoreIpAddresses = s => {
  const res = [];
  const l = s.length;
  if (l < 4 || l > 12) return res;
  const tmp = [];
  const dfs = (start, total) => {
    if (total === 4 && start === l) {
      res.push(tmp.join('.'));
      return res;
    }
    for (let i = 1; i < 4 && i < l; i++) {
      const subs = s.slice(start, start + i);
      if (valid(subs)) {
        tmp.push(subs);
        dfs(start + i, total + 1);
        tmp.pop();
      }
    }
  };
  dfs(0, 0);
  return res;
};
