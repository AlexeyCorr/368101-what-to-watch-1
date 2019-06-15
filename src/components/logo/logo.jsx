import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Path from './../../paths.js';

const Logo = ({modifier}) => {
  return (
    <div className="logo">
      <Link to={Path.MAIN()} className={`logo__link logo__link--${modifier}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  modifier: PropTypes.string,
};

export default Logo;
