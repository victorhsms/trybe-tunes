import React, { Component } from 'react';
import Input from '../components/Input';
import { createUser } from '../services/userAPI';
// import PropTypes from 'prop-types';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginName: '',
      btnDesabled: true,
    };
  }

  componentDidUpdate() {
    this.submitDesabledManager();
  }

  submitDesabledManager = () => {
    const { loginName, btnDesabled } = this.state;
    const minCharacters = 3;

    if (btnDesabled === true && loginName.length >= minCharacters) {
      this.setState({
        btnDesabled: false,
      });
    } else if (btnDesabled === false && loginName.length < minCharacters) {
      this.setState({
        btnDesabled: true,
      });
    }
  }

  sendName = () => {
    const { loginName } = this.state;
    createUser({ name: loginName });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { loginName, btnDesabled } = this.state;
    return (
      <form data-testid="page-login">
        <h2>Página de Login</h2>
        <Input
          id="login-name-input"
          name="loginName"
          type="text"
          message="Informe o nome"
          value={ loginName }
          onInputChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ btnDesabled }
          onClick={ this.sendName }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {

};

export default Login;
