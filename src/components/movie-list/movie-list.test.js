import React from 'react';
import renderer from 'react-test-renderer';

import MovieList from './movie-list.jsx';

const mock = {
  films: [
    {
      genre: `Romance`,
      previewImage: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      videoLink: `movie-page.html`,
      previewLink: `1.webm`,
    }
  ]
};

it(`renders correctly`, () => {
  const {films} = mock;
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MovieList
      films={films}
      onClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
