var findContestMatch = function(n) {
  let res = Array.from(Array(n), (_, i) => i + 1);
  while (res.length !== 1) {
    const round = [];
    for (let i = 0; i < res.length / 2; i++) {
      round.push(`(${res[i]},${res[res.length - 1 - i]})`);
    }
    res = round;
  }
  return res[0];
};
