const initialState = {
  genre: `All genres`,
  films: [],
};

const ActionType = {
  GET_GENRE: `GET_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
};

const ActionCreator = {
  getGenre: (genre) => {
    return {
      type: ActionType.GET_GENRE,
      payload: genre,
    };
  },

  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_GENRE:
      return Object.assign({}, state, {
        genre: action.payload,
      });

    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
