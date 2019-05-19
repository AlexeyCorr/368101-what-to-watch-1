import React from 'react';
import renderer from 'react-test-renderer';

import MovieList from './movie-list.jsx';

const mock = {
  films: [
    {
      genre: `Romance`,
      picture: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      link: `movie-page.html`,
      src: [`1.webm`, `2.mp4`]
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
