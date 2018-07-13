const shallowEqual = (oa, ob) => {
  if (
    typeof oa !== 'object' ||
    typeof ob !== 'object' ||
    typeof oa === null ||
    typeof ob === null
  ) {
    return false;
  }
  
  const ka = Object.keys(oa);
  const kb = Object.keys(ob);
  
  if (ka.length !== kb.length) return false;

  for (const k of ka) {
    if (
      !ob.hasOwnProperty(k) ||
			typeof oa[k] !== typeof ob[k]
    ) {
      return false;
    }

    if (typeof oa[k] === 'object') {
      return shallowEqual(oa[k], ob[k]);
    } else {
      return oa[k] === ob[k];
    }
  }
  return true;
};
const x = { a: { b: 1 } };
const y = { a: { b: 1 } };
// console.log(shallowEqual(x, y));
console.log(Object.is(x, y));
// console.log(shallowEqual(window, window));