import styled from 'styled-components';

export const Card = styled.li`
    width: 320px;
    height: 240px;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
    margin: 14px;
    cursor: pointer;
`

export const Title = styled.p`
    width: 300px;
    margin: 0;
    padding: 5px;
    font-size: 15px;
    height: 20px;
    text-decoration: none;
    color: black;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`