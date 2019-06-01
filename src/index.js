import {createStore} from "redux";
import {Provider} from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';

import {reducer} from './reducer/reducer.js';
import films from './mocks/films.js';
import App from './components/app/app.jsx';

const dataFilms = fetch(`https://es31-server.appspot.com/wtw/films`);
console.log(dataFilms);

const init = (filmsData) => {

  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  ReactDOM.render(
    <Provider store={store}>
      <App
        films={filmsData}
      />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init(dataFilms);
