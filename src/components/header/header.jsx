import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Path from './../../paths.js';
import {BASE_URL} from './../../constants.js';

const Header = ({className, title, user}) => {
  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <a href="#" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title">{title}</h1>

      <div className="user-block">
        {user.avatarUrl ? (<div className="user-block__avatar">
          <Link to={Path.FAVORITES}>
            <img src={`${BASE_URL}${user.avatarUrl}`} alt="User avatar" width="63" height="63" />
          </Link></div>
        ) : (<Link to={Path.LOGIN} className="user-block__link">Sign in</Link>)}
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string,
  user: PropTypes.object,
};

export default Header;
