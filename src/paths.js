const Path = {
  MAIN: () => `/`,
  LOGIN: () => `/login`,
  FAVORITES: () => `/favorites`,
  FILM: (id) => `/film/${id}`,
  SHOW_FILM: (id) => `/film/${id}/play`,
  REVIEW: (id) => `/film/${id}/review`,
};

export default Path;
