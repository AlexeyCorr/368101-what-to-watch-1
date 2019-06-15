import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Path from './../../paths.js';
import {BASE_URL} from './../../constants.js';
import Logo from './../logo/logo.jsx';

const Header = ({className, title, breadcrumbs, user}) => {
  return (
    <header className={`page-header ${className}`}>
      <Logo/>

      {breadcrumbs}

      <h1 className="page-title user-page__title">{title}</h1>

      <div className="user-block">
        {user.id ? (<div className="user-block__avatar">
          <Link to={Path.FAVORITES()}>
            <img src={`${BASE_URL}${user.avatarUrl}`} alt="User avatar" width="63" height="63" />
          </Link></div>
        ) : (<Link to={Path.LOGIN()} className="user-block__link">Sign in</Link>)}
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.object,
  breadcrumbs: PropTypes.any,
};

export default Header;
