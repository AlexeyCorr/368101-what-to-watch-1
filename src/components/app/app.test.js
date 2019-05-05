import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<App
      movieTitles={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
      onClickTitle={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
