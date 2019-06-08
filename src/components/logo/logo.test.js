import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router';

import Logo from './logo.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <StaticRouter>
        <Logo modifier={`light`}/>
      </StaticRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
