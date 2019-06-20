import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../mocks/films.js';
import {comments} from './../../mocks/comments.js';
import Tabs from './tabs.jsx';

it(`renders correctly`, () => {
  const clickHandler = jest.fn();

  const tree = renderer
    .create(<Tabs
      film={films[0]}
      comments={comments}
      activeItem={`Details`}
      clickHandler={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
