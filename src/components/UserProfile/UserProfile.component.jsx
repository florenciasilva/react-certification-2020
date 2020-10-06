import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryBtn } from '../../Views/Login/Login.styles';

const UserProfile = () => {
  const [expanded, setExpanded] = useState(false);

  const getFavorites = () => {
    const getFavoritesStorage = localStorage.getItem('favorites');
    if(getFavoritesStorage) {
      return JSON.parse(getFavoritesStorage).map((favorite, i) => {
        return <Link to={`/video=?${favorite}`}> fav{i} </Link>;
      });
    }
  };

  const handleMenu = (boolean) => {
    setExpanded(boolean);
  };

  if (expanded) {
    return (
      <>
        <PrimaryBtn onClick={() => handleMenu(false)} type="button">
          Menu
        </PrimaryBtn>
        {getFavorites()}
      </>
    );
  }
  return (
    <PrimaryBtn onClick={() => handleMenu(true)} type="button">
      Menu
    </PrimaryBtn>
  );
};

export default UserProfile;
