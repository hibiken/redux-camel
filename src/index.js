const _ = require('lodash');

const camelcaseKeys = (obj) => {
  let newObject = _.isArray(obj) ? [] : {};

  for (let prop in obj) {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      newObject[_.camelCase(prop)] = camelcaseKeys(obj[prop]);
    } else {
      newObject[_.camelCase(prop)] = obj[prop];
    }
  }
  return newObject;
}

const camelMiddleware = store => next => action => {
  if (typeof action === 'object') {
    const newAction = camelcaseKeys(action);
    return next(newAction);
  } else {
    return next(action);
  }
}

module.exports = {
  camelcaseKeys,
  camelMiddleware,
};
