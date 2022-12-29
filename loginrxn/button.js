import React, { Component } from 'react';

class Button extends Component {
  handleClick = () => {
    import('./App')
      .then(({ App }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default Button;