import React, { Component } from 'react';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
      loadingUser: true,
    };
  }

  componentDidMount() {
    this.requestUser();
  }

  requestUser = async () => {
    const user = await getUser();
    this.setState({
      user,
      loadingUser: false,
    });
  }

  renderPage = () => {
    const { user } = this.state;
    return (
      <>
        <h1>
          TrybeTunes
        </h1>
        <h2>
          {'Olá, '}
          <span data-testid="header-user-name">{user.name}</span>
        </h2>
      </>
    );
  }

  render() {
    const { loadingUser } = this.state;
    return (
      <header data-testid="header-component">
        {loadingUser ? <Loading /> : this.renderPage()}
      </header>
    );
  }
}

export default Header;
