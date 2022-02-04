import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      album: {},
      music: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.searchAlbum(id);
  }

  searchAlbum = async (id) => {
    const resultRequest = await getMusics(id);
    const colection = resultRequest[0];
    const musics = resultRequest.filter((music, index) => index !== 0);
    this.setState({
      album: colection,
      music: musics,
    });
  }

  render() {
    const { album, music } = this.state;
    console.log(album, music);
    return (
      <div data-testid="page-album">
        <Header />
        <h2 data-testid="artist-name">{ album.artistName }</h2>
        <p data-testid="album-name">{ album.collectionName }</p>
        {music.map((track) => {
          const { trackName, previewUrl } = track;
          return (
            <MusicCard
              key={ previewUrl }
              name={ trackName }
              previewUrl={ previewUrl }
            />
          );
        })}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};

export default Album;
