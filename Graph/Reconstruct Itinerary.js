/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const route = [];
  const map = {};
  const visit = airport => {
    while ((airport in map) && map[airport].length) {
      const node = map[airport].shift();
      map[airport].sort();
      visit(node);
    }
    route.unshift(airport);
  };
  for (const ticket of tickets) {
    map[ticket[0]] = map[ticket[0]] || [];
    map[ticket[0]].push(ticket[1]);
    map[ticket[0]].sort();
  }
  visit('JFK');
  return route;
};