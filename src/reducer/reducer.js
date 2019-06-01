import films from './../mocks/films.js';

const dataFilms = fetch(`https://es31-server.appspot.com/wtw/films`).then((response) => response.json());

const initialState = {
  genre: `All genres`,
  films: dataFilms,
};

const ActionType = {
  FILTER_ITEMS: `FILTER_ITEMS`,
  GET_GENRE: `GET_GENRE`,
};

const getFilteredArray = (array, filter) => {
  return array.filter((it) => it.genre === filter);
};

const ActionCreators = {
  filterItems: (selectFilter) => {
    if (selectFilter === `All genres`) {
      return {
        type: ActionType.FILTER_ITEMS,
        payload: [...initialState.films],
      };
    }

    return {
      type: ActionType.FILTER_ITEMS,
      payload: getFilteredArray([...initialState.films], selectFilter),
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
  ActionType,
  reducer,
  getFilteredArray,
  initialState
};
