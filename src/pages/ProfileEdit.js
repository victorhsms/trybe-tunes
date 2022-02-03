import React, { Component } from 'react';
import Header from '../components/Header';
// import PropTypes from 'prop-types';

class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <p>Página de edição de perfis</p>
      </div>
    );
  }
}

ProfileEdit.propTypes = {

};

export default ProfileEdit;
