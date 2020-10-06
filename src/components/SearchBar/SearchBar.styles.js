import styled from 'styled-components';
import SVG from '../../assets/search.svg';

export const SearchInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  color: black;
`;

export const SearchSVG = styled.span`
  background: url(${SVG}) no-repeat;
  display: inline-block;
  width: 20px;
  height: 20px;
`;
