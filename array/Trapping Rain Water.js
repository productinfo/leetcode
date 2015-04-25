/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

  var l = height.length;

  if (l < 2) {
    return 0;
  }

  var left = [], right = [];

  var water = 0;

  var i;

  left[0] = 0;

  for (i = 1 ; i < l ; i++) {
    left[i] = Math.max(left[i - 1], height[i - 1]);
  }

  right[l - 1] = 0;

  for (i = l - 2 ; i >= 0 ; i--) {

    right[i] = Math.max(right[i + 1], height[i + 1]);

  }

  for (i = 0 ; i < l ; i++) {
    if (Math.min(left[i], right[i]) - height[i] > 0) {
      water += Math.min(left[i], right[i]) - height[i];
    }
  }

  return water;
};