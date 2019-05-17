import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card.jsx';

const mock =  {
  film: {
    picture: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`,
    link: `movie-page.html`,
    src: [`1.webm`, `2.mp4`]
  },
  isPlaying: false
};

it(`renders correctly`, () => {
  const {film, isPlaying} = mock;
  const mouseEnterHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MovieCard
      film={film}
      mouseEnterHandler={mouseEnterHandler}
      mouseLeaveHandler={mouseLeaveHandler}
      clickHandler={clickHandler}
      isPlaying={isPlaying}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
