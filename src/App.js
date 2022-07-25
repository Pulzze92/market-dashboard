import React from 'react';
import styles from './App.scss';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import MarketInfo from './Components/MarketInfo/MarketInfo';

import Main from './Pages/Main/Main';
import Exchanges from './Pages/Exchanges/Exchanges';
import Markets from './Pages/Markets/Markets';
import Coin from './Pages/Coin/Coin';

const App = () => {
  let marketCapSum = 0;
  let volumesSum = 0;

  const [data, setData] = React.useState([]);
  const [exchangesData, setExchangesData] = React.useState([]);
  const [marketsData, setMarketsData] = React.useState([]);
  const [selectedCoin, setSelectedCoin] = React.useState();
  const [home, setHome] = React.useState(true);
  const [exchangePage, setExchangePage] = React.useState(false);
  const [marketPage, setMarketPage] = React.useState(false);

  const ids = [];
  const symbols = [];
  const names = [];
  const marketCap = [];
  const volumes = [];
  const exchanges = [];
  const ranks = [];

  React.useEffect(() => {
    async function getTickers() {
      const coinCapResponse = await (await axios.get('https://api.coincap.io/v2/assets')).data;
      const exchanges = await (await axios.get('https://api.coincap.io/v2/exchanges')).data;
      const marketsResponse = await (await axios.get('https://api.coincap.io/v2/markets')).data;

      setData(coinCapResponse.data);
      setExchangesData(exchanges.data);
      setMarketsData(marketsResponse.data);
    }

    getTickers();
  }, []);

  data.forEach((el) => {
    ids.push(el.id);
    symbols.push(el.symbol);
    names.push(el.name);
    marketCap.push(el.marketCapUsd);
    volumes.push(el.volumeUsd24Hr);
    ranks.push(el.rank);
  });

  exchangesData.forEach((el, i) => {
    exchanges.push(el.exchangeId);
  });

  marketCap.forEach((el) => {
    marketCapSum += +el;
  });

  volumes.forEach((el) => {
    volumesSum += +el;
  });

  return (
    <div className="App">
      <Header
        home={home}
        setHome={setHome}
        exchangePage={exchangePage}
        setExchangePage={setExchangePage}
        marketPage={marketPage}
        setMarketPage={setMarketPage}
      />
      <MarketInfo
        ids={ids}
        symbols={symbols}
        names={names}
        marketCapSum={marketCapSum}
        volumesSum={volumesSum}
        exchanges={exchanges}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              names={names}
              ranks={ranks}
              data={data}
              ids={ids}
              symbols={symbols}
              marketCap={marketCap}
              setSelectedCoin={(selectedCoin) => setSelectedCoin(selectedCoin)}
            />
          }
        />
        <Route path="/exchanges" element={<Exchanges exchangesData={exchangesData} />} />
        <Route path="/markets" element={<Markets marketsData={marketsData} />} />
        <Route path="/coin" element={<Coin selectedCoin={selectedCoin} />} />
      </Routes>
    </div>
  );
};

export default App;
