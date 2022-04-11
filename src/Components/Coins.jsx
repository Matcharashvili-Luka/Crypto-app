import React from 'react';
import CoinItem from './CoinItem';
import '../Style/Coins.css';
import Coin from '../Pages/Coin';
import { Link } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import Carousel from './Carousel/Carousel';

function Coins({ coins, searchCoin, setSearchCoin }) {
  return (
    <div className='container'>
        <div>
            <Carousel />
            <SearchBar 
                setSearchCoin={setSearchCoin}
                searchCoin={searchCoin}
            />
            <div className="heading">
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>              
            </div>
            {/* filter for searchbar */}
            {coins.filter((coins) => {
                if(searchCoin === ''){
                    return coins
                }else if(coins.name.toLowerCase().includes(searchCoin.toLowerCase())){
                    // if coin's name includes serch value return that coin
                    return coins
                }else if(coins.symbol.toLowerCase().includes(searchCoin.toLowerCase())){
                    // if coin's symbol includes serch value return that coin
                    return coins
                }}).map((coins) => {
                    return(
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Coins