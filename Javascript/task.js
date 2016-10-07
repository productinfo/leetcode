class Task {
	constructor(max) {
  	this.max = max;
  	this.queue = [];
    this.working = 0;
  }
  add(task) {
  	this.queue.push(task);
  }
  run() {
  	if (this.queue.length === 0) return;
    const task = this.queue.shift();
    this.working++;
    task(_ => {
    	// execute when task is done
    	this.working--
      if (this.working < this.max) {
      	// more tasks in the queue,
        // since the current task has been done. We can start a new one.
        this.run();
      }
    });
  }
  concur() {
  	for (let i = 0; i < this.max; i++) {
			setTimeout(this.run.bind(this), 0);
    }
  }
}

const t = new Task(3);
const gen = (txt, time) => callback => setTimeout(_ => {
	console.log(txt);
  callback && callback();
}, time);
const t1 = gen('t1', 1100);
const t2 = gen('t2', 1200);
const t3 = gen('t3', 1300);
const t4 = gen('t4', 1400);
const t5 = gen('t5', 1500);
const t6 = gen('t6', 1600);
const t7 = gen('t7', 1700);
const t8 = gen('t8', 1800);
t.add(t1);
t.add(t2);
t.add(t3);
t.add(t4);
t.add(t5);
t.add(t6);
t.add(t7);
t.add(t8);
t.concur();
