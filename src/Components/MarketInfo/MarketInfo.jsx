import React from 'react';
import styles from './MarketInfo.scss';
import axios from 'axios';

const MarketInfo = ({ marketCapSum, marketCap, names, prices, symbols, volumesSum }) => {
  console.log(volumesSum / 1000000000);

  return (
    <div className="market__info">
      <ul className="tickers">
        <li className="cap">
          <h3>Market Cap</h3>
          <p>{'$' + `${(marketCapSum / 1000000000000).toString().slice(0, 4)}T`}</p>
        </li>
        <li className="vol">
          <h3>Exchange Vol</h3>
          <p>{'$' + `${(volumesSum / 1000000000).toString().slice(0, 4)}B`}</p>
        </li>
        <li className="exchanges">
          <h3>Exchanges</h3>
          <p></p>
        </li>
        <li className="markets">
          <h3>Markets</h3>
          <p></p>
        </li>
      </ul>
    </div>
  );
};

export default MarketInfo;
