import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

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

Enzyme.configure({adapter: new Adapter()});

it(`renders correctly`, () => {
  const {user, className, title} = mock;
  const header = shallow(<Header
    user={user}
    className={className}
    title={title}
  />);

  expect(toJSON(header)).toMatchSnapshot();
});
