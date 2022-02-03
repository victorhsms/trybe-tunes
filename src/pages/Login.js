import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from '../components/Input';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
// import PropTypes from 'prop-types';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginName: '',
      btnDesabled: true,
      btnUse: true,
      statePromise: true,
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

  sendName = async () => {
    const { loginName } = this.state;
    this.setState({
      btnUse: false,
    });
    await createUser({ name: loginName });
    this.setState({
      statePromise: false,
      btnUse: false,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  renderPage = () => {
    const { loginName, btnDesabled } = this.state;
    return (
      <form>
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
      </form>);
  }

  renderLoading = () => {
    const { statePromise } = this.state;
    return statePromise
      ? <Loading />
      : <Redirect to="/search" />;
  }

  render() {
    const { btnUse } = this.state;
    return (
      <div data-testid="page-login">
        {btnUse
          ? this.renderPage()
          : this.renderLoading()}
      </div>
    );
  }
}

Login.propTypes = {

};

export default Login;
