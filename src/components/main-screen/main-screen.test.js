import React from 'react';
import MainScreen from './main-screen.jsx';
import renderer from 'react-test-renderer';
import GenreList from './../genre-list/genre-list.jsx';
import MovieList from './../movie-list/movie-list.jsx';

const mock = {
  // GenreListComponent: <GenreList/>,
  // MovieListComponent: <MovieList/>,
};

it(`renders correctly`, () => {
  const {GenreListComponent, MovieListComponent} = mock;

  const tree = renderer
    .create(<MainScreen
      GenreListComponent={GenreListComponent}
      MovieListComponent={MovieListComponent}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
