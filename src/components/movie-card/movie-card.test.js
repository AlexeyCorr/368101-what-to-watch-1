import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card.jsx';

const mock =  {
  film: {
    genre: `Romance`,
    previewImage: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`,
    videoLink: `movie-page.html`,
    previewVideoLink: `1.webm`,
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
