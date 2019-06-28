import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router';

import {user} from './../../mocks/user.js';
import {films} from './../../mocks/films.js';
import {match} from './../../mocks/match.js';
import {MovieDetailsScreen} from './movie-details-screen.jsx';

it(`renders correctly`, () => {
  const loadComments = jest.fn();
  const addFavotite = jest.fn();
  const removeFavotite = jest.fn();

  const tree = renderer
  .create(
      <StaticRouter>
        <MovieDetailsScreen
          match={match}
          user={user}
          films={films}
          film={films[0]}
          loadComments={loadComments}
          addFavotite={addFavotite}
          removeFavotite={removeFavotite}
        />
      </StaticRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
