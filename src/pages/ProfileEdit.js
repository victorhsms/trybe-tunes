import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Input from '../components/Input';
import Button from '../components/Button';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      onLoading: true,
      disabled: true,
      name: '',
      email: '',
      image: '',
      description: '',
    };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  componentDidUpdate() {
    this.submitDesabledManager();
  }

  submitDesabledManager = () => {
    const {
      disabled,
      name,
      email,
      image,
      description,
    } = this.state;
    const indexOfLimit = -1;

    const validateEmail = [
      email.length >= 1,
      email.indexOf('@') !== indexOfLimit,
      email.indexOf('.') !== indexOfLimit,
    ];

    const validate = [
      name.length >= 1,
      image.length >= 1,
      description.length >= 1,
      validateEmail.every((condition) => condition),
    ];

    const resultValidation = validate.every((condition) => condition);

    if (disabled === true && resultValidation) {
      this.setState({
        disabled: false,
      });
    } else if (disabled === false && !resultValidation) {
      this.setState({
        disabled: true,
      });
    }
  }

  getUserInfo = async () => {
    const userInfo = await getUser();
    const { name, email, image, description } = userInfo;
    this.setState({
      onLoading: false,
      name,
      email,
      image,
      description,
    });
  }

  setUserInfos = async (event) => {
    event.preventDefault();
    const { name, email, image, description } = this.state;
    this.setState({
      onLoading: true,
    });
    await updateUser({
      name,
      email,
      image,
      description,
    });
    this.setState({
      onLoading: false,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const {
      onLoading,
      disabled,
      name,
      email,
      image,
      description,
    } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {onLoading ? <Loading />
          : (
            <div>
              <p>Página de edição de perfis</p>
              <Input
                id="edit-input-name"
                type="text"
                name="name"
                value={ name }
                message="Informe seu nome..."
                onInputChange={ this.handleChange }
              />
              <Input
                id="edit-input-email"
                type="email"
                name="email"
                value={ email }
                message="test@test.com"
                onInputChange={ this.handleChange }
              />
              <Input
                id="edit-input-description"
                type="text"
                name="description"
                value={ description }
                message="Informe sua descrição..."
                onInputChange={ this.handleChange }
              />
              <Input
                id="edit-input-image"
                type="text"
                name="image"
                value={ image }
                message="Informe a url de sua imagem..."
                onInputChange={ this.handleChange }
              />
              <Button
                type="submit"
                message="salvar"
                data-testid="edit-button-save"
                disabled={ disabled }
                onClick={ this.setUserInfos }
              />
            </div>
          )}
      </div>
    );
  }
}

ProfileEdit.propTypes = {

};

export default ProfileEdit;
