class HitCounter {
  constructor() {
    this.map = {};
    this.max = 300;
  }

  hit(t) {
    this.map[t] = this.map[t] || 0;
    this.map[t]++;
  }

  getHits(t) {
    const point = t - this.max > 0 ? (t - this.max) + 1 : 0;
    let total = 0;
    const times = Object.keys(this.map);
    for (const time of times) {
      if (time >= point) total += this.map[time];
      else delete this.map[time];
    }
    return total;
  }
}
