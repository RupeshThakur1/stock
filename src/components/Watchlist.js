import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../redux/actions'; // Import addToWatchlist
import StockList from './StockList';
import '../components/style.css';

const LOCAL_STORAGE_KEY = 'watchlist';

const Watchlist = () => {
  const watchlistData = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  const handleRemoveFromWatchlist = (stock) => {
    // Remove the stock from the Redux store
    dispatch(removeFromWatchlist(stock));
  };

  // Load watchlist data from local storage when the component mounts
  useEffect(() => {
    const localWatchlistData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localWatchlistData) {
      const parsedData = JSON.parse(localWatchlistData);
      // Dispatch the addToWatchlist action for each stock to update the Redux store
      parsedData.forEach((stock) => {
        dispatch(addToWatchlist(stock));
      });
    }
  }, [dispatch]);

  // Update local storage when the watchlist data changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(watchlistData));
  }, [watchlistData]);

  return (
    <div>
      <h2>Watchlist</h2>
      <StockList data={watchlistData} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
    </div>
  );
};

export default Watchlist;
