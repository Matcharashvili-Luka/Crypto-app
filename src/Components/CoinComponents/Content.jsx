import React from 'react';
import DOMPurify from 'dompurify';

function Content({ coin }) {
  return (
    <div className="content">
        <div className="about">
            <h3>About</h3>
            <div dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
            }}>
            </div>
        </div>
    </div>
  )
}

export default Content