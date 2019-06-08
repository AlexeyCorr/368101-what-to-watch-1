import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router'

import {user} from './../../mocks/user.js';
import {FavoritesScreen} from './favorites-screen.jsx';

it(`renders correctly`, () => {
  const tree = renderer
  .create(
    <StaticRouter>
      <FavoritesScreen user={user}/>
    </StaticRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
