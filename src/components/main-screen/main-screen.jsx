import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from './../../reducer/data/data.js';
import {getGenres, getFilteredArray} from './../../reducer/data/selectors.js';
import {getAuthorizationStatus, getUser} from './../../reducer/user/selectors.js';

import Header from './../header/header.jsx';
import Footer from './../footer/footer.jsx';
import GenreList from './../genre-list/genre-list.jsx';
import MovieList from './../movie-list/movie-list.jsx';
import withActiveItem from './../../hocs/with-active-item/with-active-item.jsx';

const WithActiveGenre = withActiveItem(GenreList);
const WithActiveMovie = withActiveItem(MovieList);

class MainScreen extends PureComponent {
  render() {
    const {
      films,
      genres,
      clickFilterHandler,
      user,
    } = this.props;

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className={`movie-card__head`} user={user}/>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
                  height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">Drama</span>
                  <span className="movie-card__year">2014</span>
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

            <WithActiveMovie
              films={films}
            />

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
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
  isAuthorization: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genres: getGenres(state),
  user: getUser(state),
  films: getFilteredArray(state),
  isAuthorization: getAuthorizationStatus(state),
});

const mapDispachToProps = (dispatch) => ({
  clickFilterHandler: (genre) => {
    dispatch(ActionCreator.getGenre(genre));
  },
});

export {MainScreen};

export default connect(mapStateToProps, mapDispachToProps)(MainScreen);
