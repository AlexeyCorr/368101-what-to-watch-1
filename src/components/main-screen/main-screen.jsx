import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import Path from './../../paths.js';

import {ActionCreator} from './../../reducer/data/data.js';
import {getGenres, getFilteredArray, getPromoFilm} from './../../reducer/data/selectors.js';
import {getUser} from './../../reducer/user/selectors.js';

import Header from './../header/header.jsx';
import Footer from './../footer/footer.jsx';
import GenreList from './../genre-list/genre-list.jsx';
import MovieList from './../movie-list/movie-list.jsx';
import withActiveItem from './../../hocs/with-active-item/with-active-item.jsx';

const WithActiveGenre = withActiveItem(GenreList);

class MainScreen extends PureComponent {

  render() {
    const {
      films,
      genres,
      clickFilterHandler,
      user,
      promoFilm,
    } = this.props;

    return (
      <React.Fragment>
        <section
          className="movie-card"
          style={{backgroundColor: promoFilm.backgroundColor || `#fff`}}>
          <div className="movie-card__bg">
            <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className={`movie-card__head`} user={user}/>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218"
                  height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{promoFilm.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{promoFilm.genre}</span>
                  <span className="movie-card__year">{promoFilm.released}</span>
                </p>

                <div className="movie-card__buttons">
                  <Link
                    className="btn btn--play movie-card__button"
                    to={`${Path.SHOW_FILM}${promoFilm.id}`}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <WithActiveGenre
              genres={genres}
              clickFilterHandler={clickFilterHandler}
            />

            <MovieList
              films={films}
            />

          </section>

          <Footer/>
        </div>

      </React.Fragment>
    );
  }
}

MainScreen.propTypes = {
  clickFilterHandler: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  user: PropTypes.object,
  promoFilm: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genres: getGenres(state),
  user: getUser(state),
  films: getFilteredArray(state),
  promoFilm: getPromoFilm(state),
});

const mapDispachToProps = (dispatch) => ({
  clickFilterHandler: (genre) => {
    dispatch(ActionCreator.getGenre(genre));
  },
});

export {MainScreen};

export default connect(mapStateToProps, mapDispachToProps)(MainScreen);
