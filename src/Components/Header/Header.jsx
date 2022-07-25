import React from 'react';
import styles from './Header.scss';

import { Link } from 'react-router-dom';

const Header = ({ home, setHome, exchangePage, setExchangePage, marketPage, setMarketPage }) => {
  return (
    <div className="header">
      <ul className="menu">
        <Link
          to="/"
          onClick={() => {
            setHome(true);
            setExchangePage(false);
            setMarketPage(false);
          }}>
          <li className={home && 'home-active'}>Home</li>
        </Link>
        <Link
          to="/exchanges"
          onClick={() => {
            setHome(false);
            setExchangePage(true);
            setMarketPage(false);
          }}>
          <li className={exchangePage && 'exchange-active'}>Exchanges</li>
        </Link>
        <Link
          to="/markets"
          onClick={() => {
            setHome(false);
            setExchangePage(false);
            setMarketPage(true);
          }}>
          <li className={marketPage && 'market-active'}>Markets</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
