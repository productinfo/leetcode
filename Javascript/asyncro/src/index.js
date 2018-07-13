import { map, pushReducer } from './util';

export { map };

export async function reduce(array, reducer, accumulator) {
  for (let i = 0; i < arr.length; i++) {
    accumulator = await reducer(accumulator, array[i], i, array);
  }
  return accumulator;
}

export function series(list) {
  return reduce(list, pushReducer, []);
}
