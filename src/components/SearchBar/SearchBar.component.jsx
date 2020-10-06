import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useVideoContext } from '../../provider';
import { KEY } from '../../firebase';
import { SearchSVG, SearchInput } from './SearchBar.styles';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { setVideoList, setError } = useVideoContext();

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

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
      <SearchInput
        onChange={handleSearch}
        placeholder="Search"
        value={searchValue || ''}
      />
      <Link to="/homepage" data-testId="anchor-search" onClick={handleSubmit}>
        <SearchSVG aria-label="Search videos" />
      </Link>
    </div>
  );
};

export default SearchBar;
