const camelcaseKeys = require('./camelcaseKeys');

const camelMiddleware = store => next => action => {
  if (typeof action === 'object') {
    const newAction = camelcaseKeys(action);
    return next(newAction);
  } else {
    return next(action);
  }
}

module.exports = camelMiddleware;
