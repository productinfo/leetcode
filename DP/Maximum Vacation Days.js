var maxVacationDays = function(flights, days) {
  const totalCity = flights.length;
  const totalWeek = days[0].length;
  let max = 0;
  const dfs = (city, week, total) => {
    if (week === totalWeek) {
      max = Math.max(max, total);
      return;
    }
    for (let nextCity = 0; nextCity < totalCity; nextCity++) {
      if (nextCity === city || flights[city][nextCity]) {
        dfs(nextCity, week + 1, total + days[nextCity][week]);
      }
    }
  };
  dfs(0, 0, 0);
  return max;
};

var maxVacationDays = function(flights, days) {
  const totalCity = flights.length;
  const totalWeek = days[0].length;
  let max = 0;
  const cache = [];
  for (let y = 0; y < totalWeek; y++) {
    cache.push([]);
  }
  const dfs = (city, week) => {
    if (week === totalWeek) return 0;
    if (cache[week][city]) return cache[week][city];
    let max = 0;
    for (let nextCity = 0; nextCity < totalCity; nextCity++) {
      if (nextCity === city || flights[city][nextCity]) {
        max = Math.max(max, dfs(nextCity, week + 1) + days[nextCity][week]);
      }
    }
    cache[week][city] = max;
    return max;
  };
  return dfs(0, 0, 0);
};
