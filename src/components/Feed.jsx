import React, { useState } from 'react';
import '../App.css';

import Logo from './Logo.jsx';
import Posts from './Posts.jsx';
import Profile from './Profile.jsx';

function Feed() {

  return (
    <>
      <Logo />
      <div className="content">
        <div>
          <Posts />
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Feed;
