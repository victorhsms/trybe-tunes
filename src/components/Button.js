import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { id, message, onClick, disabled } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid={ id }
          disabled={ disabled }
          onClick={ onClick }
        >
          { message }
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
