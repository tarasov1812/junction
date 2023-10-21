import React from 'react';
import '../App.css';

import Logo from './Logo.jsx';
import Pictures from './Pictures.jsx';
import Profile from './Profile.jsx';

function Feed() {

  return (
    <>
      <Logo />
      <div className="content">
        <div>
          <Pictures />
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Feed;
