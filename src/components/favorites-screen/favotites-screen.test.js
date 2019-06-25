import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router'

import {user} from './../../mocks/user.js';
import {films} from './../../mocks/films.js';
import {FavoritesScreen} from './favorites-screen.jsx';

it(`renders correctly`, () => {
  const loadFavorites = jest.fn();

  const tree = renderer
  .create(
    <StaticRouter>
      <FavoritesScreen
        user={user}
        films={films}
        loadFavorites={loadFavorites}
        favorites={films}
      />
    </StaticRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
