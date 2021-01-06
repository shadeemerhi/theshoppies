import { useState, useEffect } from 'react';
import axios from 'axios';

export const useApplicationData = function() {

  // Defining application state
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [nominations, setNominations] = useState({});
  const [loading, setLoading] = useState(false);

  // Environment variables
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  // API request each time the search string changes
  useEffect(() => {
    axios.get(`${baseUrl}${apiKey}&s=${searchString}`).then(response => {
      setTimeout(() => {
        setLoading(false);
        setSearchResults(response.data.Search);
      }, 300);
    })

  }, [searchString]);

  return {
    searchResults,
    searchString,
    loading,
    nominations,
    setSearchString,
    setLoading,
    setNominations
  };
}