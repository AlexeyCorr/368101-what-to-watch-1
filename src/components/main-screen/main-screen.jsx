import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator, Operation} from './../../reducer/data/data.js';
import {getGenres, getFilteredArray, getPromoFilm} from './../../reducer/data/selectors.js';
import {getUser} from './../../reducer/user/selectors.js';

import Header from './../header/header.jsx';
import Footer from './../footer/footer.jsx';
import GenreList from './../genre-list/genre-list.jsx';
import MovieList from './../movie-list/movie-list.jsx';
import withActiveItem from './../../hocs/with-active-item/with-active-item.jsx';
import Buttons from './../buttons/buttons.jsx';

const WithActiveGenre = withActiveItem(GenreList);

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._changeFavoriteHandler = this._changeFavoriteHandler.bind(this);
  }

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

                <Buttons
                  film={promoFilm}
                  user={user}
                  clickHandler={this._changeFavoriteHandler}
                />
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

  _changeFavoriteHandler() {
    const {promoFilm, addFavotite, removeFavotite} = this.props;

    if (promoFilm) {
      if (promoFilm.isFavorite) {
        removeFavotite(promoFilm.id);
      } else {
        addFavotite(promoFilm.id);
      }
    }
  }
}

MainScreen.propTypes = {
  clickFilterHandler: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  user: PropTypes.object,
  promoFilm: PropTypes.object,
  addFavotite: PropTypes.func.isRequired,
  removeFavotite: PropTypes.func.isRequired,
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
  addFavotite: (id) => dispatch(Operation.addFavotite(id)),
  removeFavotite: (id) => dispatch(Operation.removeFavotite(id)),
});

export {MainScreen};

export default connect(mapStateToProps, mapDispachToProps)(MainScreen);
