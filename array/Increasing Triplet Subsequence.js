// similar to `Major Element I/II`
const increasingTriplet = nums => {
  let n1 = Infinity;
  let n2 = Infinity;
  for (const v of nums) {
    if (v <= n1) n1 = v; // update n1 if v is smaller than both
    else if (v <= n2) n2 = v; // update n2 only if greater than n1 but smaller than n2
    else return true; // return if you find a number bigger than both
  }
  return false;
};