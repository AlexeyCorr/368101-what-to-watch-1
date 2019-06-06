import React from 'react';
import renderer from 'react-test-renderer';

import Header from './header.jsx';

const mock = {
  user: {
    id: 1,
    email: `email@mail.ru`,
    name: `name`,
    avatarUrl: `img/avatar.jpg`,
  },
  className: `class`,
  title: `title`,
};

it(`renders correctly`, () => {
  const {user, className, title} = mock;
  const tree = renderer
    .create(<Header
      user={user}
      className={className}
      title={title}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
