import React from 'react';
import styles from './App.scss';
import axios from 'axios';

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import MarketInfo from './Components/MarketInfo/MarketInfo';

const App = () => {
  let marketCapSum = 0;
  let volumesSum = 0;

  const [data, setData] = React.useState([]);

  const ids = [];
  const symbols = [];
  const names = [];
  const marketCap = [];
  const volumes = [];

  React.useEffect(() => {
    async function getTickers() {
      const coinCapResponse = await (await axios.get('https://api.coincap.io/v2/assets')).data;

      setData(coinCapResponse.data);
      // setIds(coinCapResponse.data.id);
    }
    getTickers();
  }, []);

  data.forEach((el) => {
    ids.push(el.id);
    symbols.push(el.symbol);
    names.push(el.name);
    marketCap.push(el.marketCapUsd);
    volumes.push(el.volumeUsd24Hr);
  });

  marketCap.forEach((el) => {
    marketCapSum += +el;
  });

  volumes.forEach((el) => {
    volumesSum += +el;
  });

  return (
    <div className="App">
      <Header />
      <MarketInfo
        ids={ids}
        symbols={symbols}
        names={names}
        marketCapSum={marketCapSum}
        volumesSum={volumesSum}
      />
      <Navbar />
    </div>
  );
};

export default App;
