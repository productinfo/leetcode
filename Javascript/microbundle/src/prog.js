const { version } = require('../package');

export default handler => {
  const prog = sade('microbundle');
  return argv => prog.parse(argv, {
    alias: {
      o: [],
      i: [],
      w: []
    }
  });
};
