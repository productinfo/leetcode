var isRectangleCover = function(rectangles) {
  // 1. iterate arr
  // 2. found if there is overlap
  // 3. find x and y get area
  // 4 see if are is match
  let totalArea = 0;
  let xMax = -Infinity;
  let yMax = -Infinity;
  let xMin = Infinity;
  let yMin = Infinity;
  const map = {};
  for (const rect of rectangles) {
    const [x1, y1, x2, y2] = rect;
    [
      `${x1}-${y1}`,
      `${x2}-${y2}`,
      `${x1}-${y2}`,
      `${x2}-${y1}`
    ].forEach(k => {
      if (k in map) delete map[k];
      else map[k] = 0;
    });
    xMax = Math.max(xMax, x2);
    xMin = Math.min(xMin, x1);
    yMax = Math.max(yMax, y2);
    yMin = Math.min(yMin, y1);
    totalArea += (y2 - y1) * (x2 - x1);
  }
  if (
    !(`${xMax}-${yMax}` in map) ||
    !(`${xMax}-${yMin}` in map) ||
    !(`${xMin}-${yMax}` in map) ||
    !(`${xMin}-${yMin}` in map) ||
    Object.keys(map).length !== 4
  ) return false;
  return totalArea === (xMax - xMin) * (yMax - yMin);
};
