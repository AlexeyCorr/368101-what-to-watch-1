import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router'

import {films} from './../../mocks/films.js';
import MovieCard from './movie-card.jsx';

it(`renders correctly`, () => {
  const mouseEnterHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<StaticRouter>
      <MovieCard
        film={films[0]}
        mouseEnterHandler={mouseEnterHandler}
        mouseLeaveHandler={mouseLeaveHandler}
        clickHandler={clickHandler}
        isPlaying={true}
      />
    </StaticRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
