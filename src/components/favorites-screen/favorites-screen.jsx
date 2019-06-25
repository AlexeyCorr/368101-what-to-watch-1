import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withAuthorization from './../../hocs/with-authorization/with-authorization.jsx';
import Footer from './../footer/footer.jsx';
import Header from './../header/header.jsx';
import MovieList from './../movie-list/movie-list.jsx';
import {Operation} from './../../reducer/data/data.js';
import {getFavorites} from './../../reducer/data/selectors.js';

class FavoritesScreen extends PureComponent {
  render() {
    const {user, favorites} = this.props;

    return (
      <div className="user-page">

        <Header className={`user-page__head`} title={`My list`} user={user}/>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {favorites ? (
            <MovieList
              films={favorites}
            />
          ) : (
            <h3>{`You haven't added any movies to your favorites list.`}</h3>
          )}


        </section>

        <Footer/>
      </div>
    );
  }

  componentDidMount() {
    const {loadFavorites} = this.props;

    loadFavorites();
  }
}

FavoritesScreen.propTypes = {
  user: PropTypes.object.isRequired,
  favorites: PropTypes.array,
  loadFavorites: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  favorites: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites: () => dispatch(Operation.loadFavorites()),
});

export {FavoritesScreen};

export default connect(mapStateToProps, mapDispatchToProps)(withAuthorization(FavoritesScreen));
