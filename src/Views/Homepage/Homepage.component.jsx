import React, { useEffect, useState } from 'react';
import Thumbnail from '../../components/Thumbnails';
import Header from '../../components/Header'
import { useVideoContext } from '../../provider/';
import { KEY } from '../../firebase';

const Homepage = () => {
  const [ videos, setVideos ] = useState();
  const { videoList } = useVideoContext();

  useEffect(() => {
    if(!videoList)  {
      const params = `?part=snippet&maxResults=25&chart=mostPopular?regionCode=US&key=${KEY}`;
      fetch(`https://www.googleapis.com/youtube/v3/search` + params)
        .then((res) => res.json())
        .then((res) => res.error ? console.log(res.error, 'ERROR') : setVideos(res.items))
        .catch((err) => console.log(err.message));
    }
  }, [videoList])

const videoArray = videoList ? videoList : videos;
  return (
    <>
      <Header />
      <ul>
        <Thumbnail videos={videoArray} />
      </ul>
    </>
  );
};

export default Homepage;
