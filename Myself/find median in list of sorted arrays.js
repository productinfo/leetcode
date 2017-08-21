// O(nlogn)
const x = arr => {
  let total = 0;
  let heap = [];
  for (const a of arr) {
    heap = heap.concat(a);
    total += a.length;
  }
	heap.sort((a, b) => a - b);
  let isEven = total % 2 === 0;
  let step = total >> 1;
  let cur;
  while (step--) {
    cur = heap.shift();
  }
  let next = heap.shift();
  return isEven ? (cur + next) >> 1 : next;
};

console.log(x([
	[1,3,6,7,9], [2,4,8], [5]
]));

// i stands for element index in the corresponding array
class Node {
  constructor(val, arrIndex, i) {
    this.val = val;
    this.arrIndex = arrIndex;
    this.i = i;
  }
}

const y = arr => {
  let total = 0;
  const heap = [];
  for (let i = 0; i < arr.length; i++) {
    heap.push(new Node(arr[i][0], i, 0));
    total += arr[i].length;
  }
	console.log(total);
	let count = 0;
	let md = 0;
	let pv = 0;
	while (count++ <= (total >> 1)) {
		heap.sort((a, b) => a.val - b.val);
		const min = heap.shift();
		console.log(min);
		pv = md;
		md = min.val;
		if (arr[min.arrIndex].length - 1 > min.i) {
			heap.push(new Node(
			arr[min.arrIndex][min.i + 1],
			min.arrIndex,
			min.i + 1
			));
		}
	}
	console.log(pv, md);
};

// 5/29/2017
/*
[1, 3, 5]
[2, 4, 6]
[7, 8, 9]

*/

// get number of median
// push num into heap
// pop out from heap for X many times (same as number of median)

const x = arr => {
  let total = arr.reduce((t, a) => t + a.length, 0);
  const isEven = total % 2 === 0;
  // let count = Math.round(total / 2);
  let count = (total >> 1) + 1;
  const heap = [];
  for (let i = 0; i < arr.length; i++) {
    heap.push({
      val: arr[i][0],
      index: i,
      elemIndex: 0
    });
  }
  let pv = 0;
  let mid = 0;
  while (count-- > 0) {
    heap.sort((a, b) => a.val - b.val);
    const node = heap.shift();
    pv = mid;
    mid = node.val;
    heap.push({
      val: arr[node.index][node.elemIndex + 1],
      index: node.index,
      elemIndex: node.elemIndex + 1
    });
  }
  console.log(pv, mid);
  return isEven ? (pv + mid) / 2 : mid;
};

x([
  [1, 3, 5],
  [2, 4, 6],
  [7, 8, 9]
])