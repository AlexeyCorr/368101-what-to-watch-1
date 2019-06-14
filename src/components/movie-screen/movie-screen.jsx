import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getFilms} from './../../reducer/data/selectors'
import VideoPlayer from './../video-player/video-player.jsx';

const MovieScreen = ({films, match, history}) => {
  const film = films[match.params.id];

  console.log(match);
  if (!film) {
    return null;
  }

  return (
    <div className="player">
      <VideoPlayer picture={film.previewImage} src={film.videoLink} controls={true}/>
      <button
        type="button"
        className="player__exit"
        onClick={() => history.goBack()}
      >
        Exit
      </button>
    </div>
  );
};

MovieScreen.propTypes = {
  films: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: getFilms(state),
});

export {MovieScreen}

export default connect(mapStateToProps)(MovieScreen);
