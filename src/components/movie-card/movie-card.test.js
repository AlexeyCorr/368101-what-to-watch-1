import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card.jsx';

const mock =  {
  picture: `img/bohemian-rhapsody.jpg`,
  title: `Bohemian Rhapsody`,
  link: `movie-page.html`
};

it(`renders correctly`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MovieCard
      film={mock}
      clickHandler={clickHandler}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
