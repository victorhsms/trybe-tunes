import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      onLoading: true,
      favoriteSongs: [],
    };
  }

  componentDidMount() {
    this.getFavoritesMount();
  }

  getFavoritesMount = async () => {
    this.setState({
      onLoading: true,
    });
    const favorites = await getFavoriteSongs();
    this.setState({
      onLoading: false,
      favoriteSongs: favorites,
    });
  }

  render() {
    const { onLoading, favoriteSongs } = this.state;
    const itsFavorite = true;
    return (
      <div data-testid="page-favorites">
        <Header />
        {onLoading ? <Loading />
          : (
            <div>
              <p>Músicas favoritas:</p>
              {favoriteSongs.map((track) => {
                const { trackName, previewUrl, trackId } = track;
                return (
                  <MusicCard
                    key={ previewUrl }
                    name={ trackName }
                    id={ trackId }
                    objMusic={ track }
                    sonsState={ this.getFavoritesMount }
                    favoriteSongs={ itsFavorite }
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

Favorites.propTypes = {

};

export default Favorites;
