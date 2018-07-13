'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = exports.map = undefined;

var reduce = exports.reduce = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(array, reducer, accumulator) {
    var i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < arr.length)) {
              _context.next = 8;
              break;
            }

            _context.next = 4;
            return reducer(accumulator, array[i], i, array);

          case 4:
            accumulator = _context.sent;

          case 5:
            i++;
            _context.next = 1;
            break;

          case 8:
            return _context.abrupt('return', accumulator);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function reduce(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.series = series;

var _util = require('./util');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.map = _util.map;
function series(list) {
  return reduce(list, _util.pushReducer, []);
}