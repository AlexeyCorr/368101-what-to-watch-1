import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router';

import {history} from './../../mocks/history.js';
import {user} from './../../mocks/user.js';
import {SingInScreen} from './sing-in-screen.jsx';

it(`renders correctly`, () => {
  const logIn = jest.fn();
  const setValue = jest.fn();
  const form = {email: ``, password: ``};
  const tree = renderer
    .create(
      <StaticRouter>
        <SingInScreen user={user} logIn={logIn} history={history} form={form} setValue={setValue}/>
      </StaticRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
