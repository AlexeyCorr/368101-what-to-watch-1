import {
  ActionCreators,
  ActionType,
  reducer,
  getFilteredArray,
  initialState,
} from './reducer.js';

const mock = {
  films: [
    {
      genre: `Romance`,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
    },
    {
      genre: `Crime`,
      title: `Bohemian Rhapsody`,
    },
    {
      genre: `Thrillers`,
      title: `Macbeth`,
    },
  ],
};

describe(`Business logic is correct`, () => {
  it(`Array filtered is correctly`, () => {
    expect(getFilteredArray(mock.films, `Crime`)).toEqual([mock.films[1]]);
  });

  it(`Filter 'All genres' rerurns all movies`, () => {
    expect(ActionCreators.filterItems(`All genres`)).toEqual(
        {
          type: ActionType.FILTER_ITEMS,
          payload: [...initialState.films],
        }
    );
  });

  it(`Returns the correct genre`, () => {
    expect(ActionCreators.getGenre(`Crime`)).toEqual(
        {
          type: ActionType.GET_GENRE,
          payload: `Crime`,
        }
    );
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should return initial state if selected filter 'All genres`, () => {
    expect(reducer(undefined,
        {
          type: ActionType.FILTER_ITEMS,
          payload: [...initialState.films],
        }
    )).toEqual(initialState);
  });
});
