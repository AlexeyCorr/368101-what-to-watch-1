import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../mocks/films.js';
import MovieList from './movie-list.jsx';

it(`renders correctly`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MovieList
      films={films}
      onClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
