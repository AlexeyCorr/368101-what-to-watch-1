import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Test click on the start button`, () => {
  const clickHandler = jest.fn();
  const movieCard = shallow(<MovieCard
    title={`Fantastic Beasts`}
    onClickTitle={clickHandler}
  />);

  const startButton = movieCard.find(`.small-movie-card__link`);
  startButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
