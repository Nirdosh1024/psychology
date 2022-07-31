import styled from "styled-components";


export const GraphBackGround = styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: #2EC4B6;
    padding-top: 2.5rem;
`

export const Container = styled.div`
    height: 95vh;
    width: 95vw;
    margin: 0 auto;
    border-radius: 5px;
    position: relative;
    background: inherit;
    overflow: hidden;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
`

export const Button = styled.button`
    position: absolute;
    right: 20px;
    top: 20px;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 0.7rem;
    color: white;
    background-color: #466060;
    font-size: 1.5rem;
    font-weight: 600;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.7);
    }

`

export const Title = styled.h1`
    letter-spacing: 2px;
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-size: 3.5rem;
    font-family: monospace;
    font-weight: 900;
`

export const Chart = styled.div`
    width: 85%;
    margin: 0 auto;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid #f1f1f1;
`
