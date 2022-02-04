import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckBox extends Component {
  render() {
    const { message, id, type = 'checkbox', onChange, checked } = this.props;
    return (
      <label htmlFor={ id }>
        { message }
        <input
          type={ type }
          id={ id }
          data-testid={ id }
          checked={ checked }
          onChange={ () => onChange(id) }
        />
      </label>
    );
  }
}

CheckBox.propTypes = {
  message: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
