import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = ({clickHandler, isShow}) => {
  return (
    <div className="catalog__more" style={{display: isShow ? `block` : `none`}}>
      <button
        className="catalog__button"
        type="button"
        onClick={clickHandler}
      >
        Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  isShow: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func,
};

export default ShowMore;
