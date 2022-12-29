import React from 'react';
import { withRouter } from 'react-router'
import App from './App';

function LinkButton (){
  const [clicked] = React.useState(false);
  if (clicked) {
    return 'You liked this!';
  }
    return React.createElement(
      'button',
      {
        onClick: () => App()
      },
      'Like'
  )
}
export default withRouter(LinkButton)