import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../../mocks/films.js';
import Details from './details.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Details
      film={films[0]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
