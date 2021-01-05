import { useState, useEffect } from 'react';
import axios from 'axios';

export const useApplicationData = function() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios.get(`${baseUrl}${apiKey}&s=${searchString}`).then(response => {
      console.log(response.data);
      setTimeout(() => {
        setLoading(false);
        setSearchResults(response.data.Search);
      }, 300);
    })

  }, [searchString])


  return {
    searchResults,
    searchString,
    setSearchString,
    loading,
    setLoading
  }

}