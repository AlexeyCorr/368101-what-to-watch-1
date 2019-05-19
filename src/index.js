import React from 'react';
import ReactDOM from 'react-dom';
import films from './mocks/films.js';

import App from './components/app/app.jsx';

const sort = (films) => {
  const newData = [...films];
  return newData.filter((film) => {
    return film.genre === `Crime`;
  });
};


console.log(sort(films))
console.log(films)

const init = (filmsData) => {
  ReactDOM.render(
      <App
        films={filmsData}
      />,
      document.querySelector(`#root`)
  );
};

init(films);
