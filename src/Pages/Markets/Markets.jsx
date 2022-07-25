import React from 'react';
import styles from './Markets.scss';

const Markets = ({ marketsData }) => {
  return (
    <div className="markets">
      <div className="table">
        <div className="units">
          <ul className="titles">
            <li>Rank</li>
            <li>Name</li>
            <li>Symbol</li>
            <li>Base</li>
            <li>Volume</li>
          </ul>
          {marketsData.map((el, i) => {
            return (
              <ul className="row">
                <li>{marketsData[i].rank}</li>
                <li className="name_mark">{marketsData[i].exchangeId}</li>
                <li>{marketsData[i].baseSymbol}</li>
                <li>{marketsData[i].baseId}</li>
                <li>$ {(marketsData[i].volumeUsd24Hr / 1000000).toFixed(2)}m</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Markets;
