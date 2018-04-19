var isToeplitzMatrix = function(matrix) {
  if (!matrix) return false;
  const yl = matrix.length;
  if (!yl) return false;
  const xl = matrix[0].length;

  for (let y = 0; y < yl - 1; y++) {
    for (let x = 0; x < xl - 1; x++) {
      if (matrix[y][x] !== matrix[y + 1][x + 1]) return false;
    }
  }

  return true;
};
