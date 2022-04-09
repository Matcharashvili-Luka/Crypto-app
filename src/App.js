import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './Components/Coins';
import Navbar from './Components/Navbar';
import Coin from './Pages/Coin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false';
  
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Coins coins={coins} />}/>
        </Routes>
        <Routes>
          <Route path='/coin' element={<Coin />}>
            <Route path=':coinID' element={<Coin />}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
