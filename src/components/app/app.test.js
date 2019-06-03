import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const mock = {
  films: [
    {
      genre: `Romance`,
      previewImage: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      videoLink: `movie-page.html`,
      previewLink: `1.webm`,
    }
  ],
  genre: `All genres`,
  genres: [
    `Romance`
  ],
};

it(`renders correctly`, () => {
  const {films, genre, genres} = mock;
  const clickFilterHandler = jest.fn();

  const tree = renderer
    .create(<App
      films={films}
      genre={genre}
      genres={genres}
      clickFilterHandler={clickFilterHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
