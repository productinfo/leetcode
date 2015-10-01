// output:
// {
//   "google inc": [
//     {
//       "name": "bob",
//       "age": "20",
//       "gender": "male"
//     },
//     {
//       "name": "alice",
//       "age": "30",
//       "gender": "female"
//     },
//     {
//       "name": "can",
//       "age": "40",
//       "gender": "male"
//     }
//   ],
//   "facebook inc": [
//     {
//       "name": "mary",
//       "age": "25",
//       "gender": "female"
//     },
//     {
//       "name": "allen",
//       "age": "31",
//       "gender": "male"
//     },
//     {
//       "name": "sarah",
//       "age": "32",
//       "gender": "female"
//     }
//   ]
// }

// input:
// google inc,bob,20,male
// google inc,alice,30,female
// google inc,can,40,male
// facebook inc,mary,25,female
// facebook inc,allen,31,male
// facebook inc,sarah,32,female


import fs from 'fs';

var output = fs.readFileSync('data.txt', 'utf8')
               .trim()
               .split('\n')
               .map(line => line.split(','))
               .reduce((prev, curr) => {
                 prev[curr[0]] = prev[curr[0]] || [];
                 prev[curr[0]].push({
                   name: curr[1],
                   age: curr[2],
                   gender: curr[3]
                 });
                 return prev;
               }, {});

console.log(JSON.stringify(output, null, 2));
