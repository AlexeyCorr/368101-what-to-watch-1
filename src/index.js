import React from 'react';
import ReactDOM from 'react-dom';
import films from './mocks/films.js';

import App from './components/app/app.jsx';

const init = (filmsData) => {
  ReactDOM.render(
      <App
        films={filmsData}
      />,
      document.querySelector(`#root`)
  );
};

init(films);
