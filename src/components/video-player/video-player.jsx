import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this.state = {
      isPlaying: props.isPlaying,
      isLoading: true,
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

  componentDidMount() {
    const video = this._videoRef.current;

    if (video) {
      video.oncanplaythrough = () => {
        this.setState({
          isLoading: false,
        });
      };

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => {
        this.setState({
          isPlaying: false,
        });
      };
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      this._resetVideo(video);
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    if (video) {
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.src = ``;
    }
  }

  _getFormatVideo(src) {
    const getArray = src.split(`.`);
    const format = getArray[getArray.length - 1];
    return format;
  }

  _resetVideo(video) {
    if (video) {
      video.currentTime = 0;
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  picture: PropTypes.string.isRequired,
  src: PropTypes.array.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
