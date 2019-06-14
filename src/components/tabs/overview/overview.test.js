import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../../mocks/films.js';
import Overview from './overview.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Overview
      film={films[0]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
