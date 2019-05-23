import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const mock = {
  films: [
    {
      genre: `Romance`,
      picture: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      link: `movie-page.html`,
      src: [`1.webm`, `2.mp4`]
    }
  ],
  genre: `All genres`,
};

it(`renders correctly`, () => {
  const {films, genre} = mock;
  const clickFilterHandler = jest.fn();

  const tree = renderer
    .create(<App
      films={films}
      genre={genre}
      clickFilterHandler={clickFilterHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
