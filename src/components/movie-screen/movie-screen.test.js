import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../mocks/films.js';
import {match} from './../../mocks/match.js';
import {history} from './../../mocks/history.js';
import {MovieScreen} from './movie-screen.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<MovieScreen
      history={history}
      match={match}
      films={films}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
