import React from 'react';
import styles from './Main.scss';

const Main = ({ ids, symbols, data, ranks, names, prices, marketCap }) => {
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
              <ul className="row">
                <li>{data[i].rank}</li>
                <li className="name_coin">{data[i].name}</li>
                <li>$ {(data[i].marketCapUsd / 1000000000).toFixed(2)}b</li>
                <li>$ {(data[i].volumeUsd24Hr / 1000000000).toFixed(2)}b</li>
                <li className={data[i].changePercent24Hr > 0 ? 'green' : 'red'}>
                  {(data[i].changePercent24Hr / 1).toFixed(2)}%
                </li>
              </ul>
            );
          })}
          {/* {console.log(data[1].rank)} */}
          <ul>
            {/* {ranks.map((el) => {
              return <li>{data}</li>;
            })} */}
          </ul>
        </div>
        {/* <div className="rank">
          <ul className="rank_column">
            <span className="title">Rank</span>
            {ranks.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
        <div className="name">
          <span className="title">Name</span>
          {names.map((el) => {
            return <li>{el}</li>;
          })}
        </div>
        <div className="cap">
          <span className="title">Cap</span>
          {marketCap.map((el) => {
            return <li>$ {(el / 1000000000).toFixed(2)}B</li>;
          })}
        </div>
        <div className="volume">
          <span className="title">Volume</span>
        </div>
        <div className="change">
          <span className="title">Change</span>
        </div> */}
      </div>
    </div>
  );
};

export default Main;
