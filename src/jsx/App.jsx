import React, { useState, useEffect, useRef } from 'react';
import '../styles/styles.less';

// Load helpers.
import ChartMap from './modules/ChartMap.jsx';
import Legend from './components/Legend.jsx';

function App() {
  const [data, setData] = useState(false);

  const appRef = useRef(null);

  const fetchExternalData = () => {
    const dataPath = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2025-food_insecurity_map/' : (window.location.href.includes('localhost:80')) ? './' : 'https://unctad-infovis.github.io/2025-food_insecurity_map/'}assets/data/`;

    const topology_file = 'worldmap-economies-54030.topo.json';
    const data_file = 'data.json';
    let values;
    try {
      values = Promise.all([
        fetch(dataPath + topology_file),
        fetch(dataPath + data_file),
      ]).then(results => Promise.all(results.map(result => result.json())));
    } catch (error) {
      console.error(error);
    }
    return values;
  };

  useEffect(() => {
    fetchExternalData().then((result) => setData(result));
  }, []);

  return (
    <div className="app" ref={appRef}>
      <div className="title_container">
        <img src="https://static.dwcdn.net/custom/themes/unctad-2024-rebrand/Blue%20arrow.svg" className="logo" alt="UN Trade and Development logo" />
        <div className="title">
          <h3>Countries facing acute food insecurity often depend on imports</h3>
          <h4>Cereal import dependency ratio, per cent, 2021–2023</h4>
        </div>
      </div>
      <Legend />
      {data !== false && <ChartMap values={data} />}
    </div>
  );
}

export default App;
