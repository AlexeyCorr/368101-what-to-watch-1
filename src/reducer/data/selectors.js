import {createSelector} from 'reselect';
import NameSpace from './../name-spaces';

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

export const getComments = (state) => {
  return state[NAME_SPACE].comments;
};

export const getFilm = (state) => {
  return state[NAME_SPACE].film;
};

export const getGenres = (state) => {
  return state[NAME_SPACE].films.map((it) => it.genre);
};

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getFilteredArray = createSelector(
  getFilms,
  getGenre,
  (array, filter) => filter === `All genres` ?
    array : array.filter((it) => it.genre === filter)
);
