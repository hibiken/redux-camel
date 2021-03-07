'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _camelcaseKeys = require('./camelcaseKeys');

var _camelcaseKeys2 = _interopRequireDefault(_camelcaseKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = { global: true };

var checkCamelCaseKey = function checkCamelCaseKey(action, options) {
  if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object') {
    return (options.global || !!action.camelCase || !!action.meta.arg.camelCase) && action.camelCase !== false;
  }
};

var camelMiddleware = function camelMiddleware() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
  return function (store) {
    return function (next) {
      return function (action) {
        var shouldCamelCaseKeys = checkCamelCaseKey(action, options);

        if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object' && shouldCamelCaseKeys) {
          var newAction = (0, _camelcaseKeys2.default)(action);
          return next(newAction);
        } else {
          return next(action);
        }
      };
    };
  };
};

exports.default = camelMiddleware;