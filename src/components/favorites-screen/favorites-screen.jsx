import React from 'react';
import PropTypes from 'prop-types';

import withAuthorization from './../../hocs/with-authorization/with-authorization.jsx';
import Footer from './../footer/footer.jsx';
import Header from './../header/header.jsx';

const FavoritesScreen = ({user}) => {
  return (
    <div className="user-page">

      <Header className={`user-page__head`} title={`My list`} user={user}/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
            </h3>
          </article>
          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
            </h3>
          </article>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

FavoritesScreen.propTypes = {
  user: PropTypes.object,
};

export {FavoritesScreen};

export default withAuthorization(FavoritesScreen);
