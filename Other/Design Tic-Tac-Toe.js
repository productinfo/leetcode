class TicTacToe {
  constructor(n) {
    this.edge = n - 1;
    this.board = [];
    for (let i = 0; i < n; i++) {
      this.board.push([]);
    }
  }

  rToL(x, y) {
    let i = this.edge;
    let j = 0;
    while (i >= 0 && j <= this.edge) {
      if (this.board[j][i] !== this.board[y][x]) return false;
      i--;
      j++;
    }
    return true;
  }

  lToR(x, y) {
    for (let j = 0; j <= this.edge; j++) {
      if (this.board[j][j] !== this.board[y][x]) return false;
    }
    return true;
  }

  vertical(x, y) {
    for (let j = 0; j <= this.edge; j++) {
      if (this.board[y][j] !== this.board[y][x]) return false;
    }
    return true;
  }

  horizonal(x, y) {
    for (let j = 0; j <= this.edge; j++) {
      if (this.board[j][x] !== this.board[y][x]) return false;
    }
    return true;
  }

  move(y, x, player) {
    // place point
    this.board[y][x] = player;
    // check if win
    // if it is diagonal
    if (x === y || (x === this.edge && y === 0) || (x === 0 && y === this.edge)) {
      // need to check diagonal
      if (this.lToR(x, y) || this.rToL(x, y)) return player;
    }
    if (this.vertical(x, y) || this.horizonal(x, y)) {
      return player;
    }
    return 0;
  }
}

//better
class TicTacToe {
  constructor(n) {
    this.ys = Array(n).fill(0);
    this.xs = Array(n).fill(0);
    this.diagonal = 0;
    this.antiDiagonal = 0;
  }

  move(y, x, player) {
    const size = this.xs.length;
    const t = player === 1 ? 1 : -1;
    this.ys[y] += t;
    this.xs[x] += t;
    if (x === y) {
      this.diagonal += t;
    }
    if (x === this.xs.length - y - 1) {
      this.antiDiagonal += t;
    }
    if (
      Math.abs(this.xs[x]) === size ||
      Math.abs(this.ys[y]) === size ||
      Math.abs(this.diagonal) === size ||
      Math.abs(this.antiDiagonal) === size
    ) return player;
    return 0;
  }
}
