import React from 'react';
import renderer from 'react-test-renderer';

import MovieList from './movie-list.jsx';

const mock =  [
  {
    picture: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`,
    link: `movie-page.html`
  }
];

it(`renders correctly`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MovieList
      films={mock}
      clickHandler={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
