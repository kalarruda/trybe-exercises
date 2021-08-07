import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, label, name, onChange, value } = this.props;
    return(
      <label htmlFor={ name } >
        { label }
        <input
          type={ type }
          id={ name }
          name={ name }
          label={ label }
          onChange={ onChange }
          value={ value }
          placeholder={ name }
        />
      </label>
    );
  }
}

Input.propTypes = ({
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}).isRequired;

export default Input;
