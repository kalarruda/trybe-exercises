import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, type, value, onChange, placeholder } = this.props;
    return (
      <div>
        <input
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
          placeholder={ placeholder }
        />
      </div>
    )
  }
}

Input.propTypes = ({
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}).isRequired;

export default Input;