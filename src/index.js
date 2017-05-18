import camelcaseKeys from './camelcaseKeys';

const defaultOptions = { global: true };

const camelMiddleware = (options = defaultOptions) => store => next => action => {
  const shouldCamelCaseKeys = options.global || !!action.camelCase;
  if (typeof action === 'object' && shouldCamelCaseKeys) {
    const newAction = camelcaseKeys(action);
    return next(newAction);
  } else {
    return next(action);
  }
}

export default camelMiddleware;
