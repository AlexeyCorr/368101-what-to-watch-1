import React from 'react';
import MainScreen from './main-screen.jsx';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MainScreen
      movieTitles={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
      onClickTitle={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
