import React from 'react';
import renderer from 'react-test-renderer';

import {SingInScreen} from './sing-in-screen.jsx';

const mock = {
  user: {
    id: 1,
    email: `email@mail.ru`,
    name: `name`,
    avatarUrl: `img/avatar.jpg`,
  },
};

it(`renders correctly`, () => {
  const logIn = jest.fn();
  const {user} = mock;
  const tree = renderer
    .create(<SingInScreen
      user={user}
      logIn={logIn}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
