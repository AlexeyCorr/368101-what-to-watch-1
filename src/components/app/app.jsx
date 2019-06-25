import React from 'react';

import withUser from './../../hocs/with-user/with-user.jsx';
import Router from './../../router.js';
import Sprite from './../sprite/sprite.jsx';

const App = () => {
  return (
    <React.Fragment>
      <Sprite/>
      <Router/>
    </React.Fragment>
  );
};

export {App};

export default withUser(App);
