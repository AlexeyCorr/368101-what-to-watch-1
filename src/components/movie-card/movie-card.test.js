import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../mocks/films.js';
import MovieCard from './movie-card.jsx';

it(`renders correctly`, () => {
  const mouseEnterHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MovieCard
      film={films[0]}
      mouseEnterHandler={mouseEnterHandler}
      mouseLeaveHandler={mouseLeaveHandler}
      clickHandler={clickHandler}
      isPlaying={true}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
