// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToWatchlist } from '../redux/actions';
import StockList from './StockList';
import '../components/style.css';


const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const apiKey = 'ND910K57CB1VJH3X'; // Your AlphaVantage API key

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      // Do not make an API request for an empty search query.
      return;
    }

    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchQuery}&apikey=${apiKey}`
      );

      const data = response.data.bestMatches || [];
      setSearchResults(data);
    } catch (error) {
      console.error('API request failed', error);
      // Handle the error as needed
    }
  };

  const handleAddToWatchlist = (stock) => {
    // Dispatch the addToWatchlist action to add the stock to the Redux store
    dispatch(addToWatchlist(stock));
  };

  useEffect(() => {
    // You can perform any initial data loading or setup here if needed.
  }, []);

  return (
    <>

    <div>

      <input
        type="text"
        placeholder="Search for stocks  [ Ex - Rupesh , Tata steel ]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <StockList data={searchResults} handleAddToWatchlist={handleAddToWatchlist} />
    </div></>
  );
};

export default Home;
