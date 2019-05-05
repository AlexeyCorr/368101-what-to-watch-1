import React from 'react';
import Sprite from './sprite.jsx';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Sprite/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
