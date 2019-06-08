import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withAuthorization from './../../hocs/with-authorization/with-authorization.jsx';
import Footer from './../footer/footer.jsx';
import Header from './../header/header.jsx';
import MovieList from './../movie-list/movie-list.jsx';
import withActiveItem from './../../hocs/with-active-item/with-active-item.jsx';
import {getFilms} from './../../reducer/data/selectors.js';

const WithActiveMovie = withActiveItem(MovieList);

const FavoritesScreen = ({films, user}) => {
  return (
    <div className="user-page">

      <Header className={`user-page__head`} title={`My list`} user={user}/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <WithActiveMovie
          films={films}
        />

      </section>

      <Footer/>
    </div>
  );
};

FavoritesScreen.propTypes = {
  user: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
};

export {FavoritesScreen};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: getFilms(state),
});

export default connect(mapStateToProps)(withAuthorization(FavoritesScreen));
