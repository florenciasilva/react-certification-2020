import React, { useState, useEffect } from 'react';
import { useVideoContext } from '../../provider/';
import { KEY } from '../../firebase';
import { Link } from 'react-router-dom';

const SearchBar = () => {

  const [ searchValue, setSearchValue ] = useState('');
  const { setVideoList, setError } = useVideoContext();

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  }
  const handleSubmit = () => {
    const query = searchValue;
    const params = `?part=snippet&maxResults=25&q=${query}&key=${KEY}`;
    fetch(`https://www.googleapis.com/youtube/v3/search${params}`)
      .then((res) => res.json())
      .then((res) => (res.error ? setError(res.error.message) : setVideoList(res.items)))
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <input onChange={handleSearch} placeholder='Search' value={searchValue || ''}/>
      <Link to='/homepage' onClick={handleSubmit}> Search </Link>
    </div>
  )
}

export default SearchBar