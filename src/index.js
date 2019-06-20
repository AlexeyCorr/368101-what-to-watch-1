import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {BrowserRouter} from 'react-router-dom';

import {createAPI} from './api';
import reducer from './reducer/index.js';
import {Operation} from './reducer/data/data.js';
import {Operation as OperationU} from './reducer/user/user.js';
import App from './components/app/app.jsx';

const init = () => {
  const api = createAPI();

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(api)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a)
  );

  store.dispatch(Operation.loadFilms());
  store.dispatch(Operation.loadPromoFilm());
  store.dispatch(OperationU.getUser());

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
