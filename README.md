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
  applyMiddleware(camelMiddleware)
);
```

## License

MIT
