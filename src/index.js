import camelcaseKeys from './camelcaseKeys';

const camelMiddleware = store => next => action => {
  if (typeof action === 'object') {
    const newAction = camelcaseKeys(action);
    return next(newAction);
  } else {
    return next(action);
  }
}

export default camelMiddleware;
