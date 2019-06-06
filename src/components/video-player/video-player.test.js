import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

const mock =  {
  previewImage: `img/bohemian-rhapsody.jpg`,
  previewVideoLink: `2.mp4`,
  isPlaying: false
};

it(`renders correctly`, () => {
  const {previewImage, previewVideoLink, isPlaying} = mock;
  const tree = renderer
    .create(<VideoPlayer
      isPlaying={isPlaying}
      picture={previewImage}
      src={previewVideoLink}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
