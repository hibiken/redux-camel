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
};

module.exports = camelcaseKeys;
