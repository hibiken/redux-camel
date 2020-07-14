import camelcaseKeys from './camelcaseKeys';

const defaultOptions = { global: true };

const checkCamelCaseKey = (action) => {
  if (typeof action === 'object') {
    return !!action.camelCase || !!action.meta.arg.camelCase
  }
}

const camelMiddleware = (options = defaultOptions) => store => next => action => {
  const shouldCamelCaseKeys = options.global || checkCamelCaseKey(action);
  if (typeof action === 'object' && shouldCamelCaseKeys) {
    const newAction = camelcaseKeys(action);
    return next(newAction);
  } else {
    return next(action);
  }
}

export default camelMiddleware;
