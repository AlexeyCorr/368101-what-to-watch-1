import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieCard from './../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {
    //   activePlayer: -1
    // };
    // this._timeout = null;
  }

  render() {
    const {films, onClick, activePlayer, mouseEnterHandler, mouseLeaveHandler} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) =>
          <MovieCard
            key={`movie-card-${i}`}
            film={film}
            mouseEnterHandler={() => mouseEnterHandler(i)}
            mouseLeaveHandler={mouseLeaveHandler}
            isPlaying={i === activePlayer}
            clickHandler={onClick}
          />
        )}
      </div>
    );
  }

  // componentWillUnmount() {
  //   this._timeout = null;
  // }

  // _mouseEnter(index) {
  //   const timeoutID = window.setTimeout(() => {
  //     this.setState({
  //       activePlayer: this.state.activePlayer === index ? -1 : index
  //     });
  //   }, 1000);
  //   this._timeout = timeoutID;
  // }

  // _mouseLeave() {
  //   this.setState({activePlayer: -1});
  //   if (this._timeout) {
  //     window.clearTimeout(this._timeout);
  //   }
  // }

  componentDidUpdate() {
    console.log(this.props);
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  activePlayer: PropTypes.number,
  mouseEnterHandler: PropTypes.func,
  mouseLeaveHandler: PropTypes.func,
};

export default MovieList;
