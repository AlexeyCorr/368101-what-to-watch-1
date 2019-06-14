import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../../mocks/films.js';
import Reviews from './reviews.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Reviews
      film={films[0]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
