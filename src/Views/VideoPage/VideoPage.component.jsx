import React from 'react';
import YouTube from 'react-youtube';
import Header from '../../components/Header/index';
import RecommendedVideos from '../../components/RecommendedVideos';

const VideoPage = () => {

  const handleFavorites = (videoId) => {
    const favorites = localStorage.getItem('favorites');
    if(favorites.length === 0) {
      localStorage.setItem('favorites', JSON.stringify([videoId]));
    } else {
      const addFavorite = JSON.parse(favorites);
      if(!addFavorite.includes(videoId)) {
      addFavorite.push(videoId)
      localStorage.setItem('favorites', JSON.stringify(addFavorite))
      }
    }
  }

  const showVideo = () => {
    const videoId = window.location.search.replace('?', '');
    const options = {
      height: '700',
      width: '80%'
    }
    return (
      <>
      <YouTube
      opts={options}
      videoId={videoId}
    />
      <button type="submit" onClick={() => handleFavorites(videoId)}>Fav</button>
      <RecommendedVideos videoId={videoId} />
    </>
    )
  }

  console.log(localStorage.getItem('favorites'))
  return (
    <div>
      <Header />
      {showVideo()}
    </div>
  );
};

export default VideoPage;
