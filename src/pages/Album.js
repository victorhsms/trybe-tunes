import React, { Component } from 'react';
import Header from '../components/Header';
// import PropTypes from 'prop-types';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <p>Página de Albuns</p>
      </div>
    );
  }
}

Album.propTypes = {

};

export default Album;
