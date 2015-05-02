/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {

  var l = ratings.length;

  if (l === 0) {
    return 0;
  }

  var candys = [];

  var i;

  // for (i = 0 ; i < l ; i++) {
  //   if (i === 0) {
  //     candys[i] = 1;
  //   } else {
  //     candys[i] = 0;
  //   }
  // }

  for (i = 1 ; i < l ; i++) {

    candys[i] = candys[i] || 0;

    if (ratings[i] > ratings[i - 1]) {
      candys[i] += candys[i - 1] + 1;
    } else {
      candys[i] = 1;
    }

  }

  var total = candys[l - 1];

  for (i = l - 2 ; i >= 0 ; i--) {

    if (ratings[i] > ratings[i + 1] && candys[i] <= candys[i + 1]) {
      candys[i] = candys[i + 1] + 1;
    }

    total += candys[i];
  }

  return total;

};