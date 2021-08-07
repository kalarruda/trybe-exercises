import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, label } = this.props;
    return(
      <button

        label={ label }
        onClick={ onClick }
      >{ label }
      </button>
    );
  }
}

Button.propTypes = ({
  label: PropTypes.string,
  onClick: PropTypes.func,
}).isRequired;

export default Button;