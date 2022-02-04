import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';
import CheckBox from './CheckBox';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      checked: false,
      onLoading: false,
    };
  }

  componentDidMount() {
    this.setInitialCheck();
  }

  setInitialCheck = () => {
    const { favoriteSongs } = this.props;

    this.setState({
      checked: favoriteSongs,
    });
  }

  handleChange = async (id) => {
    const { checked } = this.state;

    if (checked === false) {
      this.setState({
        onLoading: true,
        checked: true,
      });
      await addSong(id);
      this.setState({
        onLoading: false,
      });
    } else {
      this.setState({
        checked: false,
      });
    }
  }

  render() {
    const { name, previewUrl, id } = this.props;
    const { onLoading, checked } = this.state;
    return (
      <div>
        {onLoading ? <Loading />
          : (
            <div>
              <p>{ name }</p>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                <code>
                  audio
                </code>
                .
              </audio>
              <CheckBox
                message="Favorita"
                id={ `checkbox-music-${id}` }
                checked={ checked }
                onChange={ this.handleChange }
              />
            </div>
          )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  favoriteSongs: PropTypes.bool.isRequired,
};

export default MusicCard;
