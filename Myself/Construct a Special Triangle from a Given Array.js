/**
 * http://algorithms.tutorialhorizon.com/construct-a-special-triangle-from-a-given-array/
 */

var printTriangle = function (arr) {

  var len = arr.length;

  var res = [arr];

  var i, pv, cur, j;

  for (i = 0 ; i < len - 1 ; i++) {

    pv = res.shift();

    cur = [];

    for (j = 0 ; j < pv.length - 1 ; j++) {

      cur[j] = pv[j] + pv[j + 1];

    }

    res.unshift(pv);
    res.unshift(cur);

  }

  return res;
};

// 4/8/2016
const printTriangle = (arr) => {

	const len = arr.length;

  const res = [arr];

	for (let i = 0; i < len - 1; i++) {

		const pv = res[0];
		const cur = [];

		for (let j = 0; j < pv.length - 1; j++) {
			cur[j] = pv[j] + pv[j + 1];
		}

		res.unshift(cur);

	}

	return res
};

// 4/16/2016
const foo = (n) => {

  const r = [n];

  while (r[0] && r[0].length > 1) {
    const pv = r[0];
    const t = [];
    for (let i = 1; i < pv.length; i++) {
      t.push(pv[i - 1] + pv[i]);
    }
    r.unshift(t);
  }

  return r;
};
