import React, { useState } from 'react';
import { KEY } from '../../firebase';
import { useLogout } from '../../hooks/useLogout';

const Homepage = () => {
  const { logout } = useLogout();
  const [error, setError] = useState('');
  const [videoList, setVideoList] = useState();

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
      <button type="button" onClick={logout}>
        Log out
      </button>
      {mapVideos(videoList)}
    </>
  );
};

export default Homepage;
