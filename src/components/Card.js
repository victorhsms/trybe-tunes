import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { image, album, artist } = this.props;
    return (
      <div>
        <img src={ image } alt={ album } />
        <p>{ album }</p>
        <p>{ artist }</p>
      </div>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default Card;
