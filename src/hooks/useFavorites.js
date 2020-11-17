import { useState } from 'react';

const useFavorite = () => {
  const [favoriteIcon, setFavoriteIcon] = useState('+');

  const handleFavorites = (videoId) => {
    const favorites = localStorage.getItem('favorites') || '[]';

    const addFavorite = JSON.parse(favorites);
    if (addFavorite.length === 0) {
      localStorage.setItem('favorites', JSON.stringify([videoId]));
      setFavoriteIcon('-');
    } else if (addFavorite.includes(videoId) && favoriteIcon === '-') {
      addFavorite.splice(addFavorite.indexOf(videoId), 1);
      localStorage.setItem('favorites', JSON.stringify(addFavorite));
      setFavoriteIcon('+');
    } else if (!addFavorite.includes(videoId)) {
      addFavorite.push(videoId);
      localStorage.setItem('favorites', JSON.stringify(addFavorite));
      setFavoriteIcon('-');
    }
  };

  return { handleFavorites, favoriteIcon, setFavoriteIcon };
};

export default useFavorite;
