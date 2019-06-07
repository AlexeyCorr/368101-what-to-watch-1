import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';


import {App} from './app.jsx';

const mock = {
  films: [
    {
      genre: `Romance`,
      previewImage: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      videoLink: `movie-page.html`,
      previewLink: `1.webm`,
    }
  ],
  genre: `All genres`,
  genres: [
    `Romance`
  ],
};

Enzyme.configure({adapter: new Adapter()});

it(`renders correctly`, () => {
  const {films, genre, genres} = mock;
  const clickFilterHandler = jest.fn();

  const app = shallow(<App
    films={films}
    genre={genre}
    genres={genres}
    clickFilterHandler={clickFilterHandler}
  />);

  expect(toJSON(app)).toMatchSnapshot();
});
