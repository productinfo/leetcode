var isEqual = function (obj1, obj2) {

	var key1 = Object.keys(obj1),
			key2 = Object.keys(obj2);

	if (key1.length !== key2.length) return false;

	for (var k1 in obj1) {

		if (!obj2[k1]) return false;

		if (typeof obj1[k1] !== typeof obj2[k1]) return false;

		if (typeof obj1[k1] === 'object') {
			if (!isEqual(obj1[k1], obj2[k1])) return false;
		} else {
			if (obj1[k1] !== obj2[k1]) return false;
		}

	}

	return true;

};

// 6/17/2017
function isEqual(oa, ob) {
  if (
    !oa || !ob || typeof oa !== 'object' || typeof ob !== 'object'
  ) return false;

  const ka = Object.keys(oa);
  const kb = Object.keys(ob);

  if (ka.length !== kb.length) return false;

  for (const k in oa) {
    if (!(k in ob)) return false;
    if (typeof oa[k] !== typeof ob[k]) return false;
    if (typeof oa[k] === 'object') return isEqual(oa[k], ob[k]);
    if (oa[k] !== ob[k]) return false;
  }

  return true;
}