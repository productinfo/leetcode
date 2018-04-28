// Greedy

// 1. sort
// 2. select local optimal stage

var reconstructQueue = function(people) {
  const max =  Math.max(...people.map(([a]) => a));
  people.sort((a, b) => {
    return a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]
  });
  const res = [];
  const find = j => {
    if (!res.length) return 0;
    let t = 0;
    for (let i = 0; i < res.length; i++) {
      if (t === people[j][1]) return i;
      if (res[i][0] >= people[j][0]) {
        t++;
      }
    }
    return res.length;
  };
  for (let i = 0; i < people.length; i++) {
    const index = find(i);
    res.splice(index, 0, people[i]);
  }
  return res;
};


// 4/28/2018
const reconstructQueue = people => {
  people.sort((a, b) => {
    return a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]
  });
  const res = [];
  const find = ([m, n]) => {
    let t = 0;
    for (let j = 0;j < res.length; j++) {
      if (t === n) return j;
      if (res[j][0] >= m) t++;
    }
    return res.length;
  };
  for (const p of people) {
    res.splice(find(p), 0, p);
  }
  return res;
};

