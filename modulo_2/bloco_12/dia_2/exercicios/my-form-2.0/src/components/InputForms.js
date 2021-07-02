import React, { Component } from 'react';

class InputForms extends Component {

  render() {
    const { inputType, inputlabel, inputName, onChangeInput, inputValue, isRequired, inputMaxLength, inputModeNumber} = this.props;
    return (      

      <label> 
      { inputlabel }                     
        <input 
          type={ inputType } 
          name={ inputName }
          value={ inputValue }
          onChange={ onChangeInput }
          required={ isRequired }
          maxLength={ inputMaxLength }
        />
      </label>
    )
  }
}

export default InputForms;