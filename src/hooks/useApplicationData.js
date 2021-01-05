import { useState, useEffect } from 'react';
import axios from 'axios';

export const useApplicationData = function() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [error, setError] = useState('');

  const apiKey = process.env.REACT_APP_API_KEY
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios.get(`${baseUrl}${apiKey}&s=${searchString}`).then(response => {
      console.log(response.data);
      if(response.data.Response === "True") {
        setSearchResults(response.data.Search);
      }
    })

  }, [])

  return {
    searchResults,
    searchString,
    setSearchString
  }

}