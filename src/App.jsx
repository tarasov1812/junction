import React from 'react';
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import './App.css';

import Feed from './components/Feed.jsx';
import Profile from './components/Profile.jsx';
import Header from './components/Header.jsx';
import Settings from './components/Settings.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/app/" element={<Header />}>
    <Route index element={<Feed />} />
    <Route path="photos" element={<Feed />} />
    <Route path="profile" element={<Profile />} />
    <Route path="login" element={<Profile />} />
    <Route path="settings/" element={<Settings />}>
    </Route>
  </Route>,
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
