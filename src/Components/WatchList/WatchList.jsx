import React from 'react';
import '../../Style/WatchList.css'

function WatchList({ watchList, onDelete, watchlistItems }) {

  return (
    <div className='watchList'>
        <div className={watchList ? 'openedWL' : 'closedWL'}>    
            <div>
                {/* {watchlistItems.map((item) => {
                    return(
                      <p>{item.name}</p>
                    )
                })} */}
            </div>
        </div>
    </div>
  )
}

export default WatchList