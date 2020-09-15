import React, { useState } from 'react';
// import { useSearchAPI } from '../hooks/useSearchAPI';
import { KEY } from '../../firebase';

const Homepage = () => {
  const [error, setError] = useState('');
  const [videoList, setVideoList] = useState();
  // const fetchVideos = useSearchAPI('surfing');

  const mapVideos = () => {
    if (videoList) {
      return videoList.map((video) => {
        console.log(video.snippet.title);
        return <p>{video.snippet.title}</p>;
      });
    }
    return <p>{error}</p>;
  };

  const getVideos = () => {
    const query = 'surfing';
    const params = `?part=snippet&maxResults=25&q=${query}&key=${KEY}`;
    fetch(`https://www.googleapis.com/youtube/v3/search${params}`)
      .then((res) => res.json())
      .then((res) => (res.error ? setError(res.error.message) : setVideoList(res.items)))
      .catch((err) => setError(err.message));
  };

  return (
    <>
      <button type="button" onClick={getVideos}>
        Homepage
      </button>
      {mapVideos(videoList)}
    </>
  );
};

export default Homepage;