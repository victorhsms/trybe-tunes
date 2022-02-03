import React, { Component } from 'react';
import Header from '../components/Header';
// import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <p>Página de perfil</p>
      </div>
    );
  }
}

Profile.propTypes = {

};

export default Profile;
