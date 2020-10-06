import React from 'react';
import { Card, Container, Title, VideoLink } from './Thumbnails.styles';

const Thumbnail = ({ videos }) => {
  if (videos) {
    return (
      <Container>
        {videos.map((video) => {
          return (
            <Card key={video.id} data-testId="thumbnail-li">
              <VideoLink to={`/video=?${video.id.videoId}`}>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <Title>{video.snippet.title}</Title>
              </VideoLink>
            </Card>
          );
        })}
      </Container>
    );
  }
  return (
    <Container>
      <Card>
        <img
          src="https://dummyimage.com/300x200/000/fff"
          alt="dummy img"
          data-testId="dummy-img"
        />
        <Title>title here</Title>
      </Card>
    </Container>
  );
};

export default Thumbnail;
