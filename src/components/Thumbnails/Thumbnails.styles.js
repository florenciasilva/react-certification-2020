import styled from 'styled-components';

export const Card = styled.li`
    width: 300px;
    height: 240px;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
    margin: 14px;
    background: linear-gradient(269deg, #8d93ea, #b68aea, #7ad4e3, #f0e379);
    background-size: 900% 900%;
    animation: Gradient 8s ease infinite;
    cursor: pointer;
`

export const Title = styled.p`
    width: 300px;
    margin: 0;
    padding: 5px;
    font-size: 15px;
    background-color: white;
    height: 20px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`