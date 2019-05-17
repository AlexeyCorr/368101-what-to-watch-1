import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isPlaying: props.isPlaying,
      isLoading: false,
    };
  }

  render() {
    const {picture, src} = this.props;
    const source = src.map((it, i) => {
      let format = this._getFormatVideo(it);
      return <source src={it} type={`video/${format}`} key={`format-${i}`}/>;
    });

    return (
      <video
        width="100%"
        poster={picture}
        ref={this._videoRef}
        muted
      >
        {source}
      </video>
    );
  }

  componentDidUpdate() {
    const time = 1000;
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      setTimeout(video.play(), time);
    } else {
      video.pause();
    }
  }

  _getFormatVideo(src) {
    const getArray = src.split(`.`);
    const format = getArray[getArray.length - 1];
    return format;
  }

}

VideoPlayer.propTypes = {
  picture: PropTypes.string.isRequired,
  src: PropTypes.array.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
