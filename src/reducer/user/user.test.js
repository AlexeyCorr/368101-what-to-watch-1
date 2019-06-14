import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {
  ActionCreator,
  ActionType,
  Operation,
} from './user.js';
import {user} from './../../mocks/user.js';

const {email, password} = user;

describe(`Reducer works correctly`, () => {
  it(`Should returm error`, () => {
    expect(ActionCreator.logError(`Error`)).toEqual(
        {
          type: ActionType.LOG_ERROR,
          payload: `Error`,
        }
    );
  });

  it(`Should make a correct API call to /login`, () => {
    const dispatch = jest.fn();
    const _getState = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const logIn = Operation.logIn(email, password);

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return logIn(dispatch, _getState, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOG_IN,
        payload: [{fake: true}],
      });
    });
  });

  it(`Should make a no correct API call to /login`, () => {
    const dispatch = jest.fn();
    const _getState = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const logIn = Operation.logIn(email, password);

    apiMock
      .onPost(`/login`)
      .reply(403);

    return logIn(dispatch, _getState, api)
    .then(() => {
      // expect(dispatch).toHaveBeenCalledTimes(1);
      // expect(dispatch).toHaveBeenNthCalledWith(1, {
      //   type: ActionType.LOG_ERROR,
      //   payload: `Request finished with error 403`,
      // });
    });
  });
});
