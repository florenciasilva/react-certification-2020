import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecommendedContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const RecommendedVideo = styled.li`
  list-style-type: none;
  width: 50%;
  display: flex;
`;

export const VideoLink = styled(Link)`
  color: black;
  text-decoration: none;
  width: 50%;
`;
