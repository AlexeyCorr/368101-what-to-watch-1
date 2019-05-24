import React from 'react';
import renderer from 'react-test-renderer';

import GenreList from './genre-list.jsx'

const mock = {
  genres: new Set([
    `All genres`,
    `Comedies`,
    `Crime`,
    `Documentary`,
    `Dramas`,
    `Horror`,
    `Kids & Family`,
    `Romance`,
    `Sci-Fi`,
    `Thrillers`
  ]),
  activeGenre: `All genres`,
}

it(`GenreList renders correctly`, () => {
  const {genres, activeGenre} = mock;
  const clickHandler = jest.fn();

  const tree = renderer
    .create(<GenreList
      genres={genres}
      activeGenre={activeGenre}
      clickHandler={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
