import React, { Component } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import AlbumList from '../components/AlbumList';
// import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
      artistSearch: '',
      albuns: '',
      btnDesabled: true,
      showForm: true,
      showArtist: false,
    };
  }

  componentDidUpdate() {
    this.searchDesabledManager();
  }

  searchDesabledManager = () => {
    const { artistName, btnDesabled } = this.state;
    const minCharacters = 2;

    if (btnDesabled === true && artistName.length >= minCharacters) {
      this.setState({
        btnDesabled: false,
      });
    } else if (btnDesabled === false && artistName.length < minCharacters) {
      this.setState({
        btnDesabled: true,
      });
    }
  }

  fetchAlbuns = async () => {
    const { artistName } = this.state;
    const artist = artistName;
    this.setState({
      artistName: '',
      artistSearch: artist,
      showForm: false,
      showArtist: false,
    });
    const foundAlbums = await searchAlbumsAPI(artist);
    this.setState({
      albuns: foundAlbums,
      showForm: true,
      showArtist: true,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const {
      showForm,
      artistName,
      showArtist,
      btnDesabled,
      albuns,
      artistSearch } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        {showForm
          ? (
            <>
              <Input
                id="search-artist-input"
                name="artistName"
                type="text"
                message="Nome do artista"
                value={ artistName }
                onInputChange={ this.handleChange }
              />
              <Button
                id="search-artist-button"
                message="Procurar"
                disabled={ btnDesabled }
                onClick={ this.fetchAlbuns }
              />
            </>)
          : <Loading />}
        {showArtist
          ? <AlbumList albuns={ albuns } artist={ artistSearch } />
          : null}
      </div>
    );
  }
}

export default Search;
