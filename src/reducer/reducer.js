import films from './../mocks/films.js';

const initialState = {
  genre: `All genres`,
  films,
};

const ActionType = {
  FILTER_ITEMS: `FILTER_ITEMS`,
  GET_GENRE: `GET_GENRE`,
};

const getFilteredArray = (array, filter) => {
  console.log(array, filter)
  return [...array].filter((it) => it.genre === filter);
};

const ActionCreators = {
  filterItems: (films, selectFilter) => {
    if (selectFilter === `All genres`) {
      return {
        type: ActionType.FILTER_ITEMS,
        payload: films,
      };
    }

    return {
      type: ActionType.FILTER_ITEMS,
      payload: getFilteredArray(films, selectFilter),
    };
  },

  getGenre: (genre) => {
    return {
      type: ActionType.GET_GENRE,
      payload: genre,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_ITEMS:
      return Object.assign({}, state, {
        films: action.payload,
      });

    case ActionType.GET_GENRE:
      return Object.assign({}, state, {
        genre: action.payload,
      });
  }

  return state;
};

export {
  ActionCreators,
  reducer
};
