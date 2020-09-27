import React from 'react';
import YouTube from 'react-youtube';
import Header from '../../components/Header/index';

const VideoPage = () => {
  console.log(window.location.search)
  const showVideo = () => {
    const videoId = window.location.search;
    const options = {
      height: '700',
      width: '80%'
    }
    return (
      <YouTube
      opts={options}
      videoId={videoId }
    />
    )
  }
  return (
    <div>
      <Header />
      {showVideo()}
    </div>
  );
};

export default VideoPage;
