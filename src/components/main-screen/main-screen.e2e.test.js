import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainScreen from './main-screen.jsx';

configure({adapter: new Adapter()});

const mock = {
  films: [
    {
      picture: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      link: `movie-page.html`,
      src: [`1.webm`, `2.mp4`]
    }
  ]
};

it(`On click on MovieCard`, () => {
  const {films} = mock;
  const mainScreen = mount(<MainScreen
    films={films}
  />);

  const button = mainScreen.find(`.small-movie-card__link`);
  button.simulate(`click`);

  expect(mainScreen.state(`selectFilm`)).toEqual(films[0]);
});
