import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      onLoading: true,
      userInfo: {},
    };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = async () => {
    const userInfo = await getUser();
    console.log(userInfo);
    this.setState({
      onLoading: false,
      userInfo,
    });
  }

  render() {
    const { onLoading, userInfo } = this.state;
    const { name, image, description, email } = userInfo;
    return (
      <div data-testid="page-profile">
        <Header />
        {onLoading ? <Loading />
          : (
            <div>
              <p>Página de perfil</p>
              <img src={ image } alt={ name } data-testid="profile-image" />
              <h2>{ name }</h2>
              <p>{ email }</p>
              <p>{ description }</p>
              <Link to="/profile/edit">
                <button type="button">
                  Editar perfil
                </button>
              </Link>
            </div>
          )}
      </div>
    );
  }
}

Profile.propTypes = {

};

export default Profile;
