const fetch = require('node-fetch');
const { map, series } = require('./dist');
const url = 'https://reqres.in/api/users/';
const x = async () => await map(
  [1, 2, 3],
  async id => fetch(`${url}${id}`)
);

(async () => {
  const v = await x();
  console.log(v);
  // const z = await series([
  //   async _ => await fetch('1'),
  //   async _ => await fetch('2')
  // ]);
  // console.log(z);
})();
