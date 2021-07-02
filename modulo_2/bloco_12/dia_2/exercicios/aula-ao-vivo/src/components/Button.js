import React from 'react';

class Button extends React.Component {
  render() {
    const { typeButton, onClickButton, labelButton } = this.props;
    return (
      <button type={typeButton} onClick={ onClickButton } >{ labelButton }</button>
    )
  }
}

export default Button;