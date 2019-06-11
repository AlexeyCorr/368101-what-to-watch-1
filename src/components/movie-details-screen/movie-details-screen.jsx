import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Footer from './../footer/footer.jsx';
import Header from './../header/header.jsx';
import MovieList from './../movie-list/movie-list.jsx';

import {getFilm, getFilms} from './../../reducer/data/selectors.js';
import {getUser} from './../../reducer/user/selectors.js';

const MovieDetailsScreen = (props) => {
  const {user, film, films} = props;

  const getTimeline = (time) => {
    const hours = time >= 60 ? Math.trunc(time / 60) : 0;
    const min = time - hours * 60;
    return `${hours}h ${min}m`;
  };

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: film.backgroundColor || `#fff`}}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt="The Grand Budapest Hotel" />
          </div>
          <h1 className="visually-hidden">WTW</h1>

          <Header className={`movie-card__head`} user={user}/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>
              <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{film.director}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                      {film.starring.map((it) => `${it}\n`)}
                    </span>
                  </p>
                </div>
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{getTimeline(film.runTime)}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{film.genre}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{film.released}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList films={films}/>

        </section>

        <Footer/>

      </div>
    </React.Fragment>
  );
};

MovieDetailsScreen.propTypes = {
  user: PropTypes.object,
  film: PropTypes.object,
  films: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUser(state),
  film: getFilm(state),
  films: getFilms(state),
});

export {MovieDetailsScreen};

export default connect(mapStateToProps)(MovieDetailsScreen);
