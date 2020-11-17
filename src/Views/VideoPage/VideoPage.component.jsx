import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import Header from '../../components/Header/index';
import RecommendedVideos from '../../components/RecommendedVideos';
import { VideoContainer } from './VideoPage.styles';
import { PrimaryBtn } from '../Login/Login.styles';
import useFavorites from '../../hooks/useFavorites';

const VideoPage = () => {
  
  const { handleFavorites, favoriteIcon, setFavoriteIcon } = useFavorites();
  const videoId = window.location.search.replace('?', '');

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const determineFavorite = favorites.includes(videoId);
    // eslint-disable-next-line
    const determineStartingIcon = determineFavorite ? setFavoriteIcon('-') : setFavoriteIcon('+')
  }, [videoId, setFavoriteIcon])

  const showVideo = () => {
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
