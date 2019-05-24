import React from 'react';
import MainScreen from './main-screen.jsx';
import renderer from 'react-test-renderer';

const mock = {
  films: [
    {
      genre: `Romance`,
      picture: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      link: `movie-page.html`,
      src: [`1.webm`, `2.mp4`],
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
