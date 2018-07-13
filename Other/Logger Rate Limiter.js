class Logger {
  constructor() {
    this.map = {};
    this.period = 10;
  }

  shouldPrintMessage(timestamp, message) {
    if (message in this.map) {
      if (timestamp < this.map[message] + this.period) return false;
    }
    this.map[message] = timestamp;
    return true;
  }
}

// Heap
class Logger {
  constructor() {
    this.q = [];
    this.map = {};
    this.period = 10;
  }

  increase(a, b) {
    return a - b;
  }

  shouldPrintMessage(timestamp, message) {
    while (this.q.length) {
      if (timestamp - this.q[0].timestamp >= this.period) {
        this.q.shift();
        delete this.map[message];
      } else {
        break;
      }
    }
    this.q.sort(this.increase);
    const unique = this.q.every(obj => obj && obj.message !== message);
    if (unique) {
      this.map[message] = 0;
      this.q.push({ message, timestamp });
    }
    return unique;
  }
}
