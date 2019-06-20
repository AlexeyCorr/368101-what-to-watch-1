import camelcaseKeys from 'camelcase-keys';

const initialState = {
  genre: `All genres`,
  films: [],
  favotites: [],
  comments: {},
  promoFilm: {},
};

const ActionType = {
  GET_GENRE: `GET_GENRE`,
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
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
