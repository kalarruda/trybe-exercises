import React from 'react';
import Image from './Image'

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.call.name}</p>
        <p>{this.props.call.email}</p>
        <Image source={this.props.call.avatar} alternativeText="User avatar" />
      </div>
    )    
  } 
}

export default UserProfile;