const Path = {
  main: () => `/`,
  login: () => `/login`,
  favorites: () => `/favorites`,
  film: (id) => `/film/${id}`,
  showFilm: (id) => `/film/${id}/play`,
  review: (id) => `/film/${id}/review`,
};

export default Path;
