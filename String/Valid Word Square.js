const validWordSquare = matrix => {
  if (!matrix) return false;
  const yl = matrix.length;
  if (!yl) return false;
  const xl = matrix[0].length;
  const g = [];
  const max = Math.max(xl, yl);
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (
        x >= yl || matrix[x].length <= y || matrix[y][x] !== matrix[x][y]
      ) return false;
    }
  }
  return true;
};
