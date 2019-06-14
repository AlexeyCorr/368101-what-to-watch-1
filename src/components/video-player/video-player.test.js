import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../mocks/films.js';
import VideoPlayer from './video-player.jsx';

it(`renders correctly`, () => {
  const {previewImage, previewVideoLink} = films[0];
  const tree = renderer
    .create(<VideoPlayer
      isPlaying={false}
      picture={previewImage}
      src={previewVideoLink}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
