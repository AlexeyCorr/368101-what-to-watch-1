import React from 'react';
import MovieCard from './movie-card.jsx';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MovieCard
      title={`Fantastic Beasts`}
      onClickTitle={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
