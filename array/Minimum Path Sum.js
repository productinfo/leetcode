/**
 * @param {number[][]} grid
 * @return {number}
 */

// time n^2, space n
var minPathSum = function(grid) {

  var yl = grid.length;
  var xl = grid[0].length;

  if (yl < 0 || xl < 0) {
    return 0;
  }

  var res = [0];
  var i, j;

  for (i = 1 ; i < xl ; i++) {
    res.push(Number.MAX_VALUE);
  }

  for (j = 0 ; j < yl ; j++) {

    res[0] = res[0] + grid[j][0];

    for (i = 1 ; i < xl ; i++) {

      res[i] = grid[j][i] + Math.min(res[i], res[i - 1]);

    }

  }

  return res[xl - 1];

};

// time n^2, space n^2
// var minPathSum = function(grid) {

//   var yl = grid.length;
//   var xl = grid[0].length;

//   if (yl < 0 || xl < 0) {
//     return 0;
//   }

//   var res = [];
//   var i, j;

//   for (i = 0 ; i < yl ; i++) {

//     res.push([]);

//     for (j = 0 ; j < xl ; j++) {

//       res[j][i] = 0;

//     }
//   }

//   console.log(res);

// };