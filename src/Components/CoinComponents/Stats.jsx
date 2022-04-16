import React from 'react'

function Stats({ coin }) {
  return (
    <div className="content stats-data">
      <div className="stats">
          <div className="left">
              <div className="row">
                  <h4>24 Hour Low</h4>
                  {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
              </div>
              <div className="row">
                  <h4>24 Hour High</h4>
                  {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
              </div>
          </div>
          <div className="right">
              <div className="row">
                  <h4>Market Cap</h4>
                  {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
              </div>
              <div className="row">
                  <h4>Circulating Supply</h4>
                  {coin.market_data ? <p>{coin.market_data.circulating_supply.toFixed(2)}</p> : null}
              </div>
          </div>
      </div>
  </div>
  )
}

export default Stats