import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { id, name, type, value, message, onInputChange } = this.props;
    return (
      <label htmlFor={ id }>
        <input
          type={ type }
          name={ name }
          placeholder={ message }
          data-testid={ id }
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onInputChange: PropTypes.string.isRequired,
};

export default Input;
