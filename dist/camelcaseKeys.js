'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lodash = require('lodash.camelcase');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var camelcaseKeys = function camelcaseKeys(obj) {
  var newObject = Array.isArray(obj) ? [] : {};

  for (var prop in obj) {
    if (_typeof(obj[prop]) === 'object' && obj[prop] !== null) {
      newObject[(0, _lodash2.default)(prop)] = camelcaseKeys(obj[prop]);
    } else {
      newObject[(0, _lodash2.default)(prop)] = obj[prop];
    }
  }
  return newObject;
};

exports.default = camelcaseKeys;