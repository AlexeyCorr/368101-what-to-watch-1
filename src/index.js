import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {Router} from 'react-router-dom';

import {createAPI} from './api';
import reducer from './reducer/reducer.js';
import {Operation} from './reducer/data/data.js';
import App from './components/app/app.jsx';
import history from './history';
import Path from './paths.js';

const init = () => {
  const onError = () => {
    console.log(1);
    history.push(Path.login());
  };

  const api = createAPI(onError);

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
      <Router history={history}>
        <App/>
      </Router>
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
