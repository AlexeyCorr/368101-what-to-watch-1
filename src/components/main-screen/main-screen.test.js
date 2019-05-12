import React from 'react';
import MainScreen from './main-screen.jsx';
import renderer from 'react-test-renderer';

const mock = {
  films: [
    {
      picture: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      link: `movie-page.html`
    }
  ]
};

it(`renders correctly`, () => {
  const {films} = mock;

  const tree = renderer
    .create(<MainScreen
      films={films}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
