import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router';

import Footer from './footer.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(
        <StaticRouter>
          <Footer/>
        </StaticRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
