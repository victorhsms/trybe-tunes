import React, { Component } from 'react';
import Header from '../components/Header';
// import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <p>Página de busca</p>
      </div>
    );
  }
}

Search.propTypes = {

};

export default Search;
