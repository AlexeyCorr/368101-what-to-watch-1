import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router'

import {MovieDetailsScreen} from './movie-details-screen.jsx';

it(`renders correctly`, () => {
  const tree = renderer
  .create(
    <StaticRouter>
      <MovieDetailsScreen/>
    </StaticRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
