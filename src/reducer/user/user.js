import camelcaseKeys from 'camelcase-keys';

const initialState = {
  isAuthorizationRequired: false,
  user: {},
  error: undefined,
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
      dispatch(ActionCreator.logOut(error.message));
    });
  }
}


const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOG_IN: `LOG_IN`,
  LOG_OUT: `LOG_OUT`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  logIn: (user) => {
    return {
      type: ActionType.LOG_IN,
      payload: user,
    };
  },
  logOut: (error) => {
    return {
      type: ActionType.LOG_OUT,
      payload: error,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });

    case ActionType.LOG_IN:
      return Object.assign({}, state, {
        user: action.payload,
        error: undefined,
      });

    case ActionType.LOG_OUT:
      return Object.assign({}, state, {
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
