import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Style/Coin.css';
import Stats from '../Components/CoinComponents/Stats';
import MarketData from '../Components/CoinComponents/MarketData';
import MainData from '../Components/CoinComponents/MainData';
import Content from '../Components/CoinComponents/Content';


function Coin() {
    // to get coin parameters
    const params = useParams();

    const [coin, setCoin] = useState({});

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinID}`;

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoin(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, []);

  return (
    <div>
        <div className="coin-container">
            <div className="contenet">
                <h1>{coin.name}</h1>
            </div>
            <MainData coin={coin} />
            <MarketData coin={coin}/>
            <Stats coin={coin}/>
            <Content coin={coin}/>
        </div>
    </div>
  )
}

export default Coin