import React from 'react'

function MainData({ coin }) {
  return (
    <div className="content main-data">
        <div className="rank">
            <span className='rank-btn'>
                Rank #{coin.market_cap_rank}
            </span>
        </div>
        <div className="info">
            {/* if there is X return X otherwise return nothing */}
            <div className="coin-heading">
                {coin.image ? <img src={coin.image.small} alt='' /> : null}
                <p>{coin.name}</p>
                {coin.symbol ? <p>{coin.symbol.toUpperCase()}</p> : null}      
            </div>
            <div className="coin-price">
                {coin.market_data?.current_price ? <h1>$ {coin.market_data.current_price.usd}</h1> : null}
            </div>
        </div>
    </div>
  )
}

export default MainData