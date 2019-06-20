import React from 'react';
import renderer from 'react-test-renderer';

import {comments} from './../../../mocks/comments.js';
import Reviews from './reviews.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Reviews
      comments={comments}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
