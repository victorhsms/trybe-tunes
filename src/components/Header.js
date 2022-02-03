import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
          <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
          <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        </div>
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
