import {createSelector} from 'reselect';
import NameSpace from './../name-spaces';

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getFilteredArray = createSelector(
  getFilms,
  getGenre,
  (array, filter) => array.filter((it) => it.genre === filter)
);
