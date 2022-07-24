import React from 'react';
import styles from './Coin.scss';

const Coin = ({ selectedCoin }) => {
  return <div className="coin">{selectedCoin}</div>;
};

export default Coin;
