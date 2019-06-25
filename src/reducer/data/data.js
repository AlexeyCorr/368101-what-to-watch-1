import camelcaseKeys from 'camelcase-keys';

const initialState = {
  genre: `All genres`,
  films: [],
  favorites: [],
  comments: {},
  promoFilm: {},
};

const ActionType = {
  GET_GENRE: `GET_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  UPDATE_FILM: `UPDATE_FILM`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
};

const updateFilm = (film, films) => films.map((it) => film.id === it.id ? film : it);

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

  loadFavorites: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const data = camelcaseKeys(response.data);

        dispatch(ActionCreator.loadFavorites(data));
      });
  },

  addFavotite: (id) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${id}/1`)
      .then((response) => {
        const data = camelcaseKeys(response.data);

        dispatch(ActionCreator.updateFilm(data));
    });
  },

  removeFavotite: (id) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${id}/0`)
    .then((response) => {
      const data = camelcaseKeys(response.data);

      dispatch(ActionCreator.updateFilm(data));
  });
  },

  loadComments: (id) => (dispatch, _getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        const data = camelcaseKeys(response.data);

        dispatch(ActionCreator.loadComments(id, data));
      });
  },

  addReview: (id, rating, comment) => (dispatch, _getState, api) => {
    return api.post(`/comments/${id}`, {
      rating: typeof rating === `string` ? parseInt(rating, 10) : rating,
      comment: comment,
    }).then((response) => {
      const data = camelcaseKeys(response.data);

      dispatch(ActionCreator.loadComments(id, data));
    });
  },
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

  loadComments: (id, comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: {id, comments},
    };
  },

  getGenre: (genre) => {
    return {
      type: ActionType.GET_GENRE,
      payload: genre,
    };
  },

  updateFilm: (film) => {
    return {
      type: ActionType.UPDATE_FILM,
      payload: film,
    };
  },

  loadFavorites: (favorites) => {
    return {
      type: ActionType.LOAD_FAVORITES,
      payload: favorites,
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

    case ActionType.GET_GENRE:
      return Object.assign({}, state, {
        genre: action.payload,
      });

    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: {
          [action.payload.id]: action.payload.comments,
        }
      });

    case ActionType.UPDATE_FILM:
      return Object.assign({}, state, {
        films: updateFilm(action.payload, state.films),
        favorites: updateFilm(action.payload, state.favorites),
      });

    case ActionType.LOAD_FAVORITES:
      return Object.assign({}, state, {
        favorites: action.payload,
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
