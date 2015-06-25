function WordDistanceFinder (listOfWord) {

  var map = {};

  listOfWord.forEach(function (word, index) {
    if (map.hasOwnProperty(word)) {
      map[word].push(index);
    } else {
      map[word] = [index];
    }
  });

  this.map = map;


}

WordDistanceFinder.prototype.distance = function (w1, w2) {
  
  if (!w1 || !w2) {
    return -1;
  }

  var m1 = this.map[w1], m2 = this.map[w2];

  if (!m1 || !m2) {
    return -1;
  }

  var i = 0, j = 0,
      l1 = m1.length, l2 = m2.length,
      dis,
      min = Number.MAX_VALUE;

  while (i < l1 && j < l2) {

    dis = Math.abs(m1[i] - m2[j]);

    if (dis < min) {
      min = dis;
    }

    if (m1[i] < m2[j]) {
      i++;
    } else {
      j++;
    }

  }

  return min;
};

var x = new WordDistanceFinder(["the", "quick", "brown", "fox", "quick"]);
console.log(x.distance('the', 'fox'));
console.log(x.distance('quick', 'fox'));