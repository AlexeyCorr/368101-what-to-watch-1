import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app.jsx';

configure({adapter: new Adapter()});

const mock = {
  films: [
    {
      genre: `Romance`,
      picture: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      link: `movie-page.html`,
      src: [`1.webm`, `2.mp4`],
    }
  ]
};

it(`On click on MovieCard`, () => {
  const {films} = mock;
  const app = mount(<App
    films={films}
  />);

  const button = app.find(`.small-movie-card__link`);
  button.simulate(`click`);

  expect(app.state(`selectFilm`)).toEqual(films[0]);
});
