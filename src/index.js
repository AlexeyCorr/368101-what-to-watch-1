import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {compose} from 'recompose';

import {reducer, loadFilms} from './reducer/reducer.js';
import App from './components/app/app.jsx';

const init = () => {

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store.dispatch(loadFilms());

  ReactDOM.render(
    <Provider store={store}>
      <App

      />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
