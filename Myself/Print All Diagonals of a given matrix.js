// http://algorithms.tutorialhorizon.com/print-all-diagonals-of-a-given-matrix/

const foo = matrix => {

  let len = matrix.length;
  let row = 0;
  let col;
  while (row < len) {
    col = 0;
    let rowTemp = row;
    while (rowTemp >= 0) {
      console.log(matrix[rowTemp][col] + ' ');
      rowTemp--;
      col++;
    }
    console.log('-');
    row++;
  }

  col = 1;
  while (col < len) {
    let colTemp = col;
    row = len - 1;
    while (colTemp <= len - 1) {
      console.log(matrix[row][colTemp] + ' ');
      row--;
      colTemp++;
    }
    console.log('-');
    col++;
  }
};

foo([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]);
