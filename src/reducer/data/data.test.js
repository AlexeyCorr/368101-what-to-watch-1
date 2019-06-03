import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {
  ActionCreator,
  ActionType,
  Operation,
} from "./data";

describe(`Reducer works correctly`, () => {
  it(`Returns the correct genre`, () => {
    expect(ActionCreator.getGenre(`Crime`)).toEqual(
        {
          type: ActionType.GET_GENRE,
          payload: `Crime`,
        }
    );
  });

  it(`Should make a correct API call to /films`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = Operation.loadFilms();

    apiMock
    .onGet(`/films`)
    .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: [{fake: true}],
      });
    });
  });
});
