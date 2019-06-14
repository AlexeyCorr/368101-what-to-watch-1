import React from 'react';
import renderer from 'react-test-renderer';

import ShowMore from './show-more.jsx';

it(`renders correctly`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<ShowMore
      clickHandler={clickHandler}
      isShow={true}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
