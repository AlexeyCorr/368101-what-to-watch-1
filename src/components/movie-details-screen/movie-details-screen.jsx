import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Operation} from './../../reducer/data/data.js';
import {getFilms, getComments} from './../../reducer/data/selectors.js';
import {getUser} from './../../reducer/user/selectors.js';

import Footer from './../footer/footer.jsx';
import Header from './../header/header.jsx';
import MovieList from './../movie-list/movie-list.jsx';
import Tabs from './../tabs/tabs.jsx';
import withActiveItem from './../../hocs/with-active-item/with-active-item.jsx';
import Buttons from './../buttons/buttons.jsx';

const WithActiveTabs = withActiveItem(Tabs);

class MovieDetailsScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._changeFavoriteHandler = this._changeFavoriteHandler.bind(this);
  }

  render() {
    const {user, films, comments, match} = this.props;
    const film = films[match.params.id - 1];

    if (!film) {
      return null;
    }

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

                <Buttons
                  user={user}
                  film={film}
                  clickHandler={this._changeFavoriteHandler}
                  isReview={true}
                />

              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
              </div>

              <WithActiveTabs film={film} comments={comments}/>

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
  }

  componentDidMount() {
    const {match, loadComments} = this.props;

    Promise.all([loadComments(parseInt(match.params.id, 10))]);
  }

  _changeFavoriteHandler() {
    const {films, addFavotite, removeFavotite, match} = this.props;
    const film = films[match.params.id - 1];

    if (film) {
      if (film.isFavorite) {
        removeFavotite(film.id);
      } else {
        addFavotite(film.id);
      }
    }
  }
}

MovieDetailsScreen.propTypes = {
  user: PropTypes.object,
  films: PropTypes.array.isRequired,
  loadComments: PropTypes.func,
  comments: PropTypes.array,
  match: PropTypes.object.isRequired,
  addFavotite: PropTypes.func.isRequired,
  removeFavotite: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUser(state),
  films: getFilms(state),
  comments: getComments(state, ownProps.match.params.id),
});

const mapDispachToProps = (dispatch) => ({
  loadComments: (id) => dispatch(Operation.loadComments(id)),
  addFavotite: (id) => dispatch(Operation.addFavotite(id)),
  removeFavotite: (id) => dispatch(Operation.removeFavotite(id)),
});

export {MovieDetailsScreen};

export default connect(mapStateToProps, mapDispachToProps)(MovieDetailsScreen);
