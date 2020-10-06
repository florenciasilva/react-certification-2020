import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Header from '../../components/Header/index';
import RecommendedVideos from '../../components/RecommendedVideos';
import { VideoContainer } from './VideoPage.styles';
import { PrimaryBtn } from '../Login/Login.styles';

const VideoPage = () => {
  const [favoriteIcon, setFavoriteIcon] = useState('+Fav');

  const handleFavorites = (videoId) => {
    const favorites = localStorage.getItem('favorites');
    const addFavorite = JSON.parse(favorites);
    if (favorites.length === 0) {
      localStorage.setItem('favorites', JSON.stringify([videoId]));
      setFavoriteIcon('-Fav');
    } else if (addFavorite.includes(videoId)) {
      localStorage.removeItem('favorites', videoId);
      setFavoriteIcon('+Fav');
    } else if (!addFavorite.includes(videoId)) {
      addFavorite.push(videoId);
      localStorage.setItem('favorites', JSON.stringify(addFavorite));
      setFavoriteIcon('-Fav');
    }
  };

  const showVideo = () => {
    const videoId = window.location.search.replace('?', '');
    const options = {
      height: '700',
      width: '100%',
    };
    return (
      <>
        <YouTube opts={options} videoId={videoId} />
        <PrimaryBtn type="submit" onClick={() => handleFavorites(videoId)}>
          {favoriteIcon}
        </PrimaryBtn>
        <RecommendedVideos videoId={videoId} />
      </>
    );
  };

  return (
    <VideoContainer>
      <Header />
      {showVideo()}
    </VideoContainer>
  );
};

export default VideoPage;
