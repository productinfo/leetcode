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

// 9/6/2016
const log = (...arg) => console.log.apply(console, arg);

const foo = m => {
	const yl = m.length;
	const xl = m[0].length;
	let x, y, t;
	y = 0;
	while (y < yl) {
		x = 0;
		t = y;
		while (t >= 0) {
			log(m[t][x]);
			t--;
			x++;
		}
		y++;
	}

	x = 1;
	while (x < xl) {
		y = yl - 1;
		t = x;
		while (t < xl) {
			log(m[y][t]);
			t++;
			y--;
		}
		x++;
	}
};
