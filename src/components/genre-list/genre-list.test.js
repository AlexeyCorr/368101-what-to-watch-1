import React from 'react';
import renderer from 'react-test-renderer';

import {genres} from './../../mocks/genres.js';
import GenreList from './genre-list.jsx'

it(`GenreList renders correctly`, () => {
  const clickHandler = jest.fn();

  const tree = renderer
    .create(<GenreList
      genres={genres}
      clickHandler={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
