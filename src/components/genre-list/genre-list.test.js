import React from 'react';
import renderer from 'react-test-renderer';

import GenreList from './genre-list.jsx'

const mock = {
  films: [
    {
      genre: `Romance`,
      previewImage: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      videoLink: `movie-page.html`,
      previewLink: `1.webm`,
    }
  ]
}

it(`GenreList renders correctly`, () => {
  const {films} = mock;
  const clickHandler = jest.fn();

  const tree = renderer
    .create(<GenreList
      films={films}
      clickHandler={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
