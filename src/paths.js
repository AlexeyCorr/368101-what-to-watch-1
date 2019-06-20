const Path = {
  main: () => `/`,
  login: () => `/login`,
  favorites: () => `/favorites`,
  film: (id) => `/film/${id}`,
  showFilm: (id) => `/film-play/${id}`,
  review: (id) => `/film-review/${id}`,
};

export default Path;
