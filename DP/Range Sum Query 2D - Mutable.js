class NumMatrix {
  constructor(matrix) {
    if (!matrix) return;
    const yl = matrix.length;
    if (!yl) return;
    const xl = matrix[0].length;
    const tree = [];
    const nums = [];
    for (let y = 0; y <= yl; y++) {
      tree.push(Array(xl + 1).fill(0));
    }
    for (let y = 0; y < yl; y++) {
      nums.push(Array(xl).fill(0));
    }
    this.yl = yl;
    this.xl = xl;
    this.tree = tree;
    this.nums = nums;
    for (let y = 0; y < yl; y++) {
      for (let x = 0; x < xl; x++) {
        this.update(x, y, matrix[y][x]);
      }
    }
  }

  update(y, x, val) {
    if (this.yl === 0 || this.xl === 0) return;
    const delta = val - this.nums[y][x];
    this.nums[y][x] = val;
    for (let i = y + 1; i <= this.yl; i += (i & -i)) {
      for (let j = x + 1; j <= this.xl; j += (j & -j)) {
        this.tree[i][j] += delta;
      }
    }
  }

  sum(y, x) {
    let total = 0;
    for (let i = y; i > 0; i -= (i & -i)) {
      for (let j = x; j > 0; j -= (j & -j)) {
        total += this.tree[i][j]
      }
    }
    return total;
  }

  sumRegion(y1, x1, y2, x2) {
    if (this.yl === 0 || this.xl === 0) return 0;
    return this.sum(y2 + 1, x2 + 1) + this.sum(y1 + 1, x1 + 1) - this.sum(y1, x2 + 1) - this.sum(y1 + 1, x1);
  }
}

const z = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]);
console.log(z)
