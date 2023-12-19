// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ screenName }) => (
  <header>
    <h1>{screenName}</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/watchlist">Watchlist</Link>
    </nav>
  </header>
);

export default Header;
