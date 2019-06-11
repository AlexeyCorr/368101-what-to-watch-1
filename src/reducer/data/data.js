import camelcaseKeys from 'camelcase-keys';

const initialState = {
  genre: `All genres`,
  films: [],
  film: {},
};

const ActionType = {
  GET_GENRE: `GET_GENRE`,
  GET_FILM: `GET_FILM`,
  LOAD_FILMS: `LOAD_FILMS`,
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const data = camelcaseKeys(response.data);

        dispatch(ActionCreator.loadFilms(data));
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

  getFilm: (film) => {
    return {
      type: ActionType.GET_FILM,
      payload: film,
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

    case ActionType.GET_FILM:
      return Object.assign({}, state, {
        film: action.payload,
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
