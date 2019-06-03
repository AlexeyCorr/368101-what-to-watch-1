import React from 'react';
import MainScreen from './main-screen.jsx';
import renderer from 'react-test-renderer';

const mock = {
  films: [
    {
      genre: `Romance`,
      previewImage: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      videoLink: `movie-page.html`,
      previewLink: `1.webm`,
    }
  ],
  genre: `All genres`,
};

it(`renders correctly`, () => {
  const {films, genre} = mock;
  const clickFilterHandler = jest.fn();
  const clickMovieHandler = jest.fn();

  const tree = renderer
    .create(<MainScreen
      films={films}
      genre={genre}
      clickFilterHandler={clickFilterHandler}
      clickMovieHandler={clickMovieHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
