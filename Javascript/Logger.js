// https://github.com/lerna/lerna/blob/master/src/logger.js

import chalk from "chalk";
// import progressBar from "./progressBar";

const cwd = process.cwd(); // current working directory
const DEFAULT_LOGLEVEL = "info";

const LEVELS = [
  [ "silly",   "magenta" ],
  [ "verbose", "blue"    ],
  [ "info",    "reset"   ],
  [ "success", "green"   ],
  [ "warn",    "yellow"  ],
  [ "error",   "red"     ],
  [ "silent",            ],
];

/*
Object {
  "error": 5,
  "info": 2,
  "silent": 6,
  "silly": 0,
  "success": 3,
  "verbose": 1,
  "warn": 4
}
*/

const TYPE_TO_LEVEL = LEVELS.reduce((map, [type], index) => (map[type] = index, map), {});

class Logger {
  constructor() {
    this.setLogLevel();
    this.logs = [];
  }

  setLogLevel(type) {
    this.loglevel = TYPE_TO_LEVEL[type || DEFAULT_LOGLEVEL];
  }

  _log(type, style, level, message, error) {
    this.logs.push({ type, message, error });
    if (level < this.loglevel) return;
    if (error) message += '\n' + (error.stack || error);
    if (style) message = style(message);
    // progressBar.clear();
    this._emit(message);
    // progressBar.restore();
  }

  _emit(message) {
    if (process.env.NODE_ENV !== 'test') {
      console.log(message);
    }
  }

  newLine() {

  }

  logifyAsync() {

  }

  logifySync() {

  }

  _formatMethod() {

  }

  _formatArguments() {

  }

  _formatValue() {

  }
}

LEVELS.forEach((type, color) => {
  if (!color) return;
  const style = chalk[color]; // function
  const level = TYPE_TO_LEVEL[type]; // number
  Logger.prototype[type] = function (message, error) {
    this._log(type, style, level, message, error);
  };
});

export default new Logger();
