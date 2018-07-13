var numBusesToDestination = function(routes, S, T) {
  if (S === T) return 0;
  const map = {};
  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      map[routes[i][j]] = map[routes[i][j]] || [];
      map[routes[i][j]].push(i);
    }
  }
  // console.log(map)
  const visited = [];
  const q = [S];
  let total = 0;
  while (q.length) {
    const size = q.length;
    total++;
    for (let k = 0; k < size; k++) {
      const cur = q.shift();
      const bus = map[cur];
      for (const b of bus) {
        if (visited[b]) continue;
        visited[b] = true;
        for (let j = 0; j < routes[b].length; j++) {
          if (routes[b][j] === T) return total;
          q.push(routes[b][j]);
        }
      }
    }
  }
  return -1;
};
