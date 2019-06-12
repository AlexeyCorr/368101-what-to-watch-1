import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router';

import {user} from './../../mocks/user.js';
import {films} from './../../mocks/films.js';
import {MovieDetailsScreen} from './movie-details-screen.jsx';

it(`renders correctly`, () => {
  const tree = renderer
  .create(
    <StaticRouter>
      <MovieDetailsScreen
        user={user}
        films={films}
        film={films[0]}
      />
    </StaticRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
