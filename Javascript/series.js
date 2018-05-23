const url = 'https://reqres.in/api/users/';

const TOTAL = 3;

const ids = Array.from({ length: TOTAL }, (_, i) => i + 1);

const getUser = (id, callback) => fetch(`${url}${id}`)
  .then(res => res.json())
  .then(callback);

const series = (tasks, final) => {
  let current = 0;
  const result = [];

  const done = () => {
    final(...result);
  };

  const cb = json => {
    result.push(json);
    current++;
    if (current < tasks.length) getUser(tasks[current], cb);
    else done();
  };

  getUser(tasks[0], cb);
};

const f = (...args) => console.log(args);

series(ids, f);

