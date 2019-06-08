import NameSpace from './../name-spaces.js';

const NAME_SPACE = NameSpace.USER;

export const getUser = (state) => {
  return state[NAME_SPACE].user;
};

export const getError = (state) => {
  return state[NAME_SPACE].error;
};
