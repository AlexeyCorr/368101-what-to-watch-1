import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {BrowserRouter} from 'react-router-dom';

import Path from './paths.js';
import {createAPI} from './api';
import reducer from './reducer/index.js';
import {Operation} from './reducer/data/data.js';
import App from './components/app/app.jsx';

const init = () => {
  const api = createAPI(() => history.pushState(null, null, Path.LOGIN));

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(api)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a)
  );

  store.dispatch(Operation.loadFilms());
  store.dispatch(Operation.loadPromoFilm());

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
