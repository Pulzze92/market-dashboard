import React from 'react';
import styles from './Exchanges.scss';

const Exchanges = ({ exchangesData }) => {
  return (
    <div className="exchanges">
      <div className="table">
        <div className="ticks">
          <ul className="titles">
            <li>Rank</li>
            <li>Name</li>
            <li>Trading Pairs</li>
            <li>Volume</li>
            <li>Total (%)</li>
          </ul>
          {exchangesData.map((el, i) => {
            return (
              <a href={exchangesData[i].exchangeUrl} target="_blank">
                <ul className="row">
                  <li>{exchangesData[i].rank}</li>
                  <li className="name_exchange">{exchangesData[i].name}</li>
                  <li>{exchangesData[i].tradingPairs}</li>
                  <li>$ {(exchangesData[i].volumeUsd / 1000000000).toFixed(2)}b</li>
                  <li>{(exchangesData[i].percentTotalVolume / 1).toFixed(2)}%</li>
                </ul>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
