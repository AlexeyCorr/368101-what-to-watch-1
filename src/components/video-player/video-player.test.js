import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

const mock =  {
  picture: `img/bohemian-rhapsody.jpg`,
  src: [`1.webm`, `2.mp4`],
  isPlaying: false
};

it(`renders correctly`, () => {
  const {picture, src, isPlaying} = mock;
  const tree = renderer
    .create(<VideoPlayer
      isPlaying={isPlaying}
      picture={picture}
      src={src}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
