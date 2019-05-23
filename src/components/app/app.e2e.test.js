import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {App} from './app.jsx';

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
  ],
  genre: `All genres`,
};

it(`On click on MovieCard`, () => {
  const {films, genre} = mock;
  const clickFilterHandler = jest.fn();

  const app = mount(<App
    films={films}
    genre={genre}
    clickFilterHandler={clickFilterHandler}
  />);

  const button = app.find(`.small-movie-card__link`);
  button.simulate(`click`);

  expect(app.state(`selectFilm`)).toEqual(films[0]);
});
