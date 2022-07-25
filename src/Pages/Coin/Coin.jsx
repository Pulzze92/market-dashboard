import React from 'react';
import styles from './Coin.scss';

import axios from 'axios';

const Coin = ({ selectedCoin }) => {
  const [curPrice, setCurPrice] = React.useState();

  React.useEffect(() => {
    const pricesWs = new WebSocket(
      `wss://ws.coincap.io/prices?assets=${selectedCoin.toLowerCase()}`,
    );

    pricesWs.onmessage = function (msg) {
      setCurPrice(msg.data.split(':')[1].split('}')[0]);
    };
  }, []);

  //DP2RCFSCYR6S01DT

  return (
    <div className="coin">
      <h2 className="coin_name">{selectedCoin}</h2>
      <div className="table">
        <div className="current_price">
          <h3>{curPrice && curPrice.slice(1, -1)}</h3>
          <h3></h3>
        </div>
      </div>
    </div>
  );
};

export default Coin;
