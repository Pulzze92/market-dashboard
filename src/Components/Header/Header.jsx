import React from 'react';
import styles from './Header.scss';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <ul className="menu">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/exchanges">
          <li>Exchanges</li>
        </Link>
        <Link to="/markets">
          <li>Markets</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
