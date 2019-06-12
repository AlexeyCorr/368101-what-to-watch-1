import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// import {Operation} from './../../reducer/data/data.js';
import {getFilm, getFilms} from './../../reducer/data/selectors.js';
import {getUser} from './../../reducer/user/selectors.js';

import Footer from './../footer/footer.jsx';
import Header from './../header/header.jsx';
import MovieList from './../movie-list/movie-list.jsx';
import Tabs from './../tabs/tabs.jsx';
import withActiveItem from './../../hocs/with-active-item/with-active-item.jsx';

const WithActiveTabs = withActiveItem(Tabs);

const MovieDetailsScreen = (props) => {
  const {user, film, films} = props;

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: film.backgroundColor || `#fff`}}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
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
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <WithActiveTabs film={film}/>

          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList films={films.filter((it) => it.genre === film.genre)}/>

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
  loadComments: PropTypes.func,
  comments: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUser(state),
  film: getFilm(state),
  films: getFilms(state),
  // comments: getComments(state),
});

// const mapDispachToProps = (dispatch) => ({
//   // loadComments: (id) => dispatch(Operation.loadComments(id).then((comment) => console.log(comment)).catch((error) => console.log(error))),
// });

export {MovieDetailsScreen};

export default connect(mapStateToProps)(MovieDetailsScreen);
