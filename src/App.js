import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './Components/Coins';
import Navbar from './Components/Navbar';
import Coin from './Pages/Coin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [coins, setCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState('');
  const [bactToTop, setBackToTop] = useState(false);

  // coins info api set 
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  // back to top button functional
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 10){ setBackToTop(true) }
      else{ setBackToTop(false) }
    })
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  };

  return (
    <Router>
      <div className='App'>
        <div className="mainApp">
          <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={
              <Coins 
                coins={coins} 
                searchCoin={searchCoin} 
                setSearchCoin={setSearchCoin} 
              />}
            />
          </Routes>
          <Routes>
            <Route path='/coin' element={<Coin />}>
              <Route path=':coinID' element={<Coin />}/>
            </Route>
          </Routes>
          
          {bactToTop && (
            <i 
              className="fa-solid fa-circle-arrow-up"
              onClick={scrollUp}
            ></i>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
