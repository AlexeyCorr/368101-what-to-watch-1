import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const data = {
    titles: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
    onClickTitle() {
      return 1;
    }
  };

  ReactDOM.render(
      <App movieTitles={data.titles} onClickTitle={data.onClickTitle}/>,
      document.querySelector(`#root`)
  );
};

init();
