import React from 'react';
import PropTypes from 'prop-types';

const GEFAULT_GENRE = `All genres`;

const GenreList = ({films, clickHandler, activeItem}) => {
  const genreList = [GEFAULT_GENRE, ...new Set(films.map((film) => film.genre))]
    .map((genre, i) =>
      <li
        className={`catalog__genres-item ${activeItem === genre ? `catalog__genres-item--active` : ``}`}
        key={`genre-${i}`}
      >
        <a
          href="#"
          className="catalog__genres-link"
          onClick={(evt) => {
            evt.preventDefault();
            clickHandler(genre, films);
          }}
        >
          {genre}
        </a>
      </li>
    );

  return (
    <ul className="catalog__genres-list">
      {genreList}
    </ul>
  );
};

GenreList.propTypes = {
  films: PropTypes.array.isRequired,
  activeItem: PropTypes.string,
  clickHandler: PropTypes.func,
};
GenreList.defaultProps = {
  activeItem: GEFAULT_GENRE,
};

export default GenreList;
