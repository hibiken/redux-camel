import camelCase from 'lodash.camelcase';

const camelcaseKeys = (obj) => {
  let newObject = Array.isArray(obj) ? [] : {};

  for (let prop in obj) {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      newObject[camelCase(prop)] = camelcaseKeys(obj[prop]);
    } else {
      newObject[camelCase(prop)] = obj[prop];
    }
  }
  return newObject;
};

export default camelcaseKeys;
