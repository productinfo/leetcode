const minCost = costs => {
  const nHouse = costs.length;
  if (!nHouse) return 0;
  const nColors = costs[0].length;
  let r = 0;
  let g = 0;
  let b = 0;
  for (let h = 0; h < nHouse; h++) {
    let rr = r;
    let bb = b;
    let gg = g;
    r = costs[h][0] + Math.min(bb, gg);
    b = costs[h][1] + Math.min(rr, gg);
    g = costs[h][2] + Math.min(rr, bb);
  }
  return Math.min(r, b, g);
};

// ...
const minCost = costs => {
  const nHouse = costs.length;
  if (!nHouse) return 0;
  const nColors = costs[0].length;
  let r = costs[0][0];
  let b = costs[0][1];
  let g = costs[0][2];
  for (let h = 1; h < nHouse; h++) {
    let rr = r;
    let bb = b;
    let gg = g;
    r = costs[h][0] + Math.min(bb, gg);
    b = costs[h][1] + Math.min(rr, gg);
    g = costs[h][2] + Math.min(rr, bb);
  }
  return Math.min(r, b, g);
};