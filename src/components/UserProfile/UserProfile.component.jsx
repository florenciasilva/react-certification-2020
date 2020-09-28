import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [expanded, setExpanded] = useState(false);

  const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites')).map((favorite, i) => {
      return <Link to={`/video=?${favorite}`}> fav{i} </Link>;
    });
  };

  const handleMenu = (boolean) => {
    setExpanded(boolean);
  };

  if (expanded) {
    return (
      <>
        <button onClick={() => handleMenu(false)} type="button">
          Menu
        </button>
        {getFavorites()}
      </>
    );
  }
  return (
    <button onClick={() => handleMenu(true)} type="button">
      Menu
    </button>
  );
};

export default UserProfile;
