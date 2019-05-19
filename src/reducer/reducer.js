import films from './../mocks/films.js';

const initialState = {
  genre: `All genres`,
  films,
};

const ActionCreator = {
  filter: (array, selectFilter) => {
    return array.filter((it) => {
      return it.genre.indexOf(selectFilter) !== -1;
    });
  }
};

const reducer = (state = initialState) => {


  return state;
};

export {
  ActionCreator,
  reducer
};
