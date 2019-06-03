import React from 'react';
import PropTypes from 'prop-types';

const GEFAULT_GENRE = `All genres`;

const GenreList = ({genres, clickHandler, activeItem}) => {
  const genreList = [GEFAULT_GENRE, ...new Set(genres)]
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
            clickHandler(genre);
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
  genres: PropTypes.array.isRequired,
  activeItem: PropTypes.string,
  clickHandler: PropTypes.func,
};
GenreList.defaultProps = {
  activeItem: GEFAULT_GENRE,
};

export default GenreList;
