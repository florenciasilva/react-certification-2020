import React, { useEffect, useState } from 'react';
import { KEY } from '../../firebase';
import {
  RecommendedContainer,
  RecommendedVideo,
  VideoLink,
} from './RecommendedVideos.styles';

const RecommendedVideos = ({ videoId }) => {
  const [recommendedList, setRecommendedList] = useState();


  useEffect(() => {
    const params = `?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video&key=${KEY}`;
    fetch(`https://www.googleapis.com/youtube/v3/search${params}`)
      .then((res) => res.json())
      .then((res) => 
        res.error ? console.log(res.error.message) : setRecommendedList(res.items)
      )
      .catch((err) => console.log(err.message));

  }, [videoId]);

  const mapRecommendedList = () => {
    if (recommendedList) {
      return recommendedList.map((video) => {
        return (
          <RecommendedVideo>
            <VideoLink to={`/video=?${video.id.videoId}`} key={video.id.videoId}>
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
              <p>{video.snippet.title}</p>
            </VideoLink>
          </RecommendedVideo>
        );
      });
    }
    return <p>loading</p>;
  };
  return <RecommendedContainer>{mapRecommendedList()}</RecommendedContainer>;
};

export default RecommendedVideos;
