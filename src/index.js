import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/rootReducer';
import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
sagaMiddleware.run(rootSaga);
render(app, document.getElementById('root'));

reportWebVitals();
