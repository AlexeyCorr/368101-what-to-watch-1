import React from 'react';
import renderer from 'react-test-renderer';

import GenreList from './genre-list.jsx'

const mock = {
  genres: [
    `Romance`
  ]
}

it(`GenreList renders correctly`, () => {
  const {genres} = mock;
  const clickHandler = jest.fn();

  const tree = renderer
    .create(<GenreList
      genres={genres}
      clickHandler={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
