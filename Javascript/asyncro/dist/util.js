"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var pushReducer = exports.pushReducer = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(acc, v) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = acc;
            _context.next = 3;
            return v();

          case 3:
            _context.t1 = _context.sent;

            _context.t0.push.call(_context.t0, _context.t1);

            return _context.abrupt("return", acc);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function pushReducer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.map = map;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function map(array, mapper) {
  return Promise.all(array.map(mapper));
}