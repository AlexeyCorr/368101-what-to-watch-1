import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router';

import {films} from './../../mocks/films.js';
import MovieList from './movie-list.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<StaticRouter>
      <MovieList
        films={films}
      />
    </StaticRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
