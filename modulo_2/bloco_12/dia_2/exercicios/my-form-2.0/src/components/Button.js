import React from 'react';

class Button extends React.Component {
  render() {
    const { buttonType, buttonName, buttonLabel } = this.props;
    return (
      <button type={ buttonType } name={ buttonName } label={ buttonLabel } >
        { buttonLabel }
      </button>
    )
  }
}

export default Button;