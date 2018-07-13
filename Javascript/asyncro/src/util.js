export function map(array, mapper) {
  return Promise.all(array.map(mapper));
}

export async function pushReducer(acc, v) {
  acc.push(await v());
  return acc;
}
