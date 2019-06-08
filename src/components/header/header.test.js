import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router'

import {user} from './../../mocks/user.js';
import Header from './header.jsx';

it(`renders correctly`, () => {
  const tree = renderer
  .create(
    <StaticRouter>
      <Header user={user} title={`title`} className={`class`}/>
    </StaticRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
