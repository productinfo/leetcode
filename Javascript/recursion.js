// result:
// {
//   animals: {
//     mammals: {
//       dogs: {
//         'a-dogs': null,
//         'b-dogs': null
//       },
//       cats: {
//         'a-cats': null,
//         'b-cats': null
//       }
//     }
//   }
// }

let data = [
  {id: 'animals', 'parent': null},
  {id: 'mammals', 'parent': 'animals'},
  {id: 'cats', 'parent': 'mammals'},
  {id: 'dogs', 'parent': 'mammals'},
  {id: 'a-dogs', 'parent': 'dogs'},
  {id: 'b-dogs', 'parent': 'dogs'},
  {id: 'a-cats', 'parent': 'cats'},
  {id: 'b-cats', 'parent': 'cats'}
];

let fn = (data, parent) => {

	let obj = {};

	data
		.filter(c => c.parent === parent)
	  .forEach(c => obj[c.id] = fn(data, c.id));

	return obj;

};

console.log(JSON.stringify(fn(data, null), null, 2));
