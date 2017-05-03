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