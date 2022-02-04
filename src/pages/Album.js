import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      album: {},
      music: [],
      favorites: [],
      onLoading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.searchAlbum(id);
    this.getFavorites();
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

  setFavorites = (favorites) => {
    const { music } = this.state;
    const idMusics = music.map((track) => track.trackId);
    const favoriteSongs = idMusics.map((id) => favorites.some((favoriteMusic) => {
      const favoriteTrack = favoriteMusic.trackId;
      return id === favoriteTrack;
    }));
    console.log(favoriteSongs);
    this.setState({
      favorites: favoriteSongs,
    });
  }

  getFavorites = async () => {
    const favorites = await getFavoriteSongs();
    this.setFavorites(favorites);
    this.setState({
      onLoading: false,
    });
  }

  render() {
    const { album, music, onLoading, favorites } = this.state;
    return (
      <div data-testid="page-album">
        {onLoading ? <Loading />
          : (
            <div>
              <Header />
              <h2 data-testid="artist-name">{ album.artistName }</h2>
              <p data-testid="album-name">{ album.collectionName }</p>
              {music.map((track, index) => {
                const { trackName, previewUrl, trackId } = track;
                return (
                  <MusicCard
                    key={ previewUrl }
                    name={ trackName }
                    id={ trackId }
                    objMusic={ track }
                    favoriteSongs={ favorites[index] }
                    previewUrl={ previewUrl }
                  />
                );
              })}
            </div>
          )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};

export default Album;
