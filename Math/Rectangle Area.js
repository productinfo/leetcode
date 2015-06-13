/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    
  var r1 = (D - B) * (C - A),
      r2 = (H - F) * (G - E);

  if (A >= G || B >= H || C <= E || D <= F) {
    return r1 + r2;
  }

  var length = Math.min(C, G) - Math.max(A, E),
      height = Math.min(D, H) - Math.max(B, F);

  return r1 + r2 - (length * height);

};