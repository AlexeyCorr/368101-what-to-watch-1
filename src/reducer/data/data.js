import camelcaseKeys from 'camelcase-keys';

const initialState = {
  genre: `All genres`,
  films: [],
  comments: [],
  promoFilm: {},
  film: {},
};

const ActionType = {
  GET_GENRE: `GET_GENRE`,
  GET_FILM: `GET_FILM`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const data = camelcaseKeys(response.data);

        dispatch(ActionCreator.loadFilms(data));
      });
  },

  loadPromoFilm: () => (dispatch, _getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const data = camelcaseKeys(response.data);

        dispatch(ActionCreator.loadPromoFilm(data));
      });
  },

  loadComments: (id) => (dispatch, _getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        const data = camelcaseKeys(response.data);

        dispatch(ActionCreator.loadComments(data));
      });
  }
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },

  loadPromoFilm: (promoFilm) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: promoFilm,
    };
  },

  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };
  },

  getGenre: (genre) => {
    return {
      type: ActionType.GET_GENRE,
      payload: genre,
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
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });

    case ActionType.LOAD_PROMO_FILM:
      return Object.assign({}, state, {
        promoFilm: action.payload,
      });

    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload,
      });

    case ActionType.GET_GENRE:
      return Object.assign({}, state, {
        genre: action.payload,
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
