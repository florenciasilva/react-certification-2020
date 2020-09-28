import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Title } from './Thumbnails.styles';

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
      <Container>
        <Card>
          <img src="https://dummyimage.com/300x200/000/fff" alt='dummy img' />
          <Title>title here</Title>
        </Card>
        <Card>
          <img src="https://dummyimage.com/300x200/000/fff" alt='dummy img' />
          <Title>title here</Title>
        </Card>
        <Card>
          <img src="https://dummyimage.com/300x200/000/fff" alt='dummy img' />
          <Title>title here</Title>
        </Card>
        <Card>
          <img src="https://dummyimage.com/300x200/000/fff" alt='dummy img' />
          <Title>title here</Title>
        </Card>
      </Container>
    )
  }
}

export default Thumbnail;