redux-camel
=============

Redux [middleware](http://redux.js.org/docs/advanced/Middleware.html) to transform action object to use camelCase keys before dispatch

[![npm](https://img.shields.io/npm/v/redux-camel.svg)](https://www.npmjs.com/package/redux-camel)
[![MIT-License](https://img.shields.io/npm/l/redux-camel.svg?style=flat-square)]()

```js
npm install --save redux-camel
```

## Motivation
Redux Camel middleware makes sure that action objects use camelCase keys before reaching reducers.

As a JavaScript developer, we deal with a number of server APIs, and sometimes we do not have control over the JSON response shape. Some APIs return JSON in camelCase format, while others return snake_case JSON. To deal with this inconsistency, `redux-camel` middleware transforms the action objects to use camelCase keys to keep your codebase clean and consistent.

## Installation

```
npm install --save redux-camel
```

Then, to enable Redux Camel, use [`applyMiddleware()`](http://redux.js.org/docs/api/applyMiddleware.html):

```js
import { createStore, applyMiddleware } from 'redux';
import camelMiddleware from 'redux-camel';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  applyMiddleware(camelMiddleware())
);
```

## API

Default export from `redux-camel` is a function that creates a middleware. The function takes an options object. You can configure the middleware to whether always transform the action objects to camelCase keys by setting `global` option (By default, it is set to `true`).

If you want to selectively transform action objects to camelCase keys, you can pass the `global` option set to `false`, and when you call `dispatch`, call it with `camelCase` set to `true` to transform the action object to use camelCase keys.

```js
/* Example #1 (Global) */
// Always transform the action objects to camelCase keys
applyMiddleware(camelMiddleware());

// Then you can dispatch an action
dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: posts });

// Or turn off camelCase keys for specific action by passing camelCase false
dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: posts, camelCase: false });

/* Example #2 (Selectively camelCase) */
// Omit global option
applyMiddleware(camelMiddleware({ global: false }));

// Then you can dispatch an action with camelCase set to true
dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: posts, camelCase: true });

/* Example #3 (Redux Toolkit) */
// Omit global option
const store = configureStore({
  ...
  middleware: [camelMiddleware({ global: false }), ...getDefaultMiddleware()],
})

// Then add to the arg object with camelCase set to true
search({ query: 'some query', camelCase: true });
```

## License

MIT
