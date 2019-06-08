import camelcaseKeys from 'camelcase-keys';

const initialState = {
  user: {},
  error: undefined,
};

const ActionType = {
  LOG_IN: `LOG_IN`,
  LOG_ERROR: `LOG_ERROR`,
};

const Operation = {
  logIn: (email, password) => (dispatch, _getState, api) => {
    return api.post(`/login`, {
      email,
      password
    }).then((response) => {
      const data = camelcaseKeys(response.data);

      dispatch(ActionCreator.logIn(data));
    }).catch((error) => {
      dispatch(ActionCreator.logError(error.message));
    });
  }
};

const ActionCreator = {
  logIn: (user) => {
    return {
      type: ActionType.LOG_IN,
      payload: user,
    };
  },
  logError: (error) => {
    return {
      type: ActionType.LOG_ERROR,
      payload: error,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOG_IN:
      return Object.assign({}, state, {
        ...state,
        user: action.payload,
        error: undefined,
      });

    case ActionType.LOG_ERROR:
      return Object.assign({}, state, {
        ...state,
        error: action.payload,
      });

    default:
      return state;
  }
};


export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
