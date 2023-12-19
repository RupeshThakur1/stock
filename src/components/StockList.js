// StockList.js
import React from 'react';

const StockList = ({ data, handleAddToWatchlist, handleRemoveFromWatchlist }) => (
  <div>
    {data.map((stock) => (
      <div key={stock['1. symbol']}>
        {stock['2. name']} - {stock['1. symbol']} - {stock['3. type']}
        {handleAddToWatchlist && (
          <button onClick={() => handleAddToWatchlist(stock)}>+</button>
        )}
        {handleRemoveFromWatchlist && (
          <button onClick={() => handleRemoveFromWatchlist(stock)}>-</button>
        )}
      </div>
    ))}
  </div>
);

export default StockList;
