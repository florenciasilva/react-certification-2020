import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './Thumbnails.styles';

const Thumbnail = ({videos}) => {


  if(videos) {
    return videos.map((video) => {
      return (
        <Card>
          <Link to={'/video=?' + video.id.videoId}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <p>{video.snippet.title}</p>
          </Link>
        </Card>
      )
    })
  } else {
    return (
      <div>
        <p>{'error'}</p>
      </div>
    )
  }
}

export default Thumbnail;