import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const data = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

  ReactDOM.render(
      <App movieTitles={data}/>,
      document.querySelector(`#root`)
  );
};

init();
