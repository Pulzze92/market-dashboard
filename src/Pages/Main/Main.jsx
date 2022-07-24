import React from 'react';
import styles from './Main.scss';
import { Link } from 'react-router-dom';

const Main = ({
  ids,
  symbols,
  data,
  ranks,
  names,
  prices,
  marketCap,
  setSelectedCoin,
  selectedCoin,
}) => {
  return (
    <div className="main">
      <div className="table">
        <div className="tickers">
          <ul className="titles">
            <li>Rank</li>
            <li>Name</li>
            <li>Cap</li>
            <li>Volume</li>
            <li>Change</li>
          </ul>
          {data.map((el, i) => {
            return (
              <Link to="/coin">
                <ul
                  className="row"
                  onClick={() => {
                    setSelectedCoin(data[i].name.toLowerCase());
                  }}>
                  <li>{data[i].rank}</li>
                  <li className="name_coin">{data[i].name}</li>
                  <li>$ {(data[i].marketCapUsd / 1000000000).toFixed(2)}b</li>
                  <li>$ {(data[i].volumeUsd24Hr / 1000000000).toFixed(2)}b</li>
                  <li className={data[i].changePercent24Hr > 0 ? 'green' : 'red'}>
                    {(data[i].changePercent24Hr / 1).toFixed(2)}%
                  </li>
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
