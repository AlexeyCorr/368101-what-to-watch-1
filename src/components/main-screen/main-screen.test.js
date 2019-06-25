import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router';

import {user} from './../../mocks/user.js';
import {films} from './../../mocks/films.js';
import {genres} from './../../mocks/genres.js';
import {MainScreen} from './main-screen.jsx';

it(`renders correctly`, () => {
  const clickFilterHandler = jest.fn();
  const clickMovieHandler = jest.fn();
  const addFavotite = jest.fn();
  const removeFavotite = jest.fn();

  const tree = renderer
    .create(
      <StaticRouter>
        <MainScreen
          films={films}
          promoFilm={films[1]}
          genres={genres}
          user={user}
          clickFilterHandler={clickFilterHandler}
          clickMovieHandler={clickMovieHandler}
          addFavotite={addFavotite}
          removeFavotite={removeFavotite}
        />
      </StaticRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
