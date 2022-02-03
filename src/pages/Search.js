import React, { Component } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
// import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
      btnDesabled: true,
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

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { artistName, btnDesabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
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
        />
      </div>
    );
  }
}

Search.propTypes = {

};

export default Search;
