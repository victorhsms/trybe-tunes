import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="page-not-found">
        <p>Erro 404, página não encontrada!</p>
      </div>
    );
  }
}

NotFound.propTypes = {

};

export default NotFound;
