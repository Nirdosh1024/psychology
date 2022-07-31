import styled from "styled-components";


export const Container = styled.div`
    min-height: 74.5vh;
    background-color: #e1e5f2;
`


export const Grid = styled.div`
    background-color: #e1e5f2;
    display: grid;
    padding: 1.5rem 1rem;
    grid-template-columns: repeat(10, 1fr);
    grid-row-gap: 2.5rem;
    grid-column-gap: 1.5rem;    
`

export const Column = styled.div`
    box-sizing: border-box;
    /* padding: 0.1rem; */
    border-radius: 3px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    outline: none;
    background-color: white;
    text-align: center;
    text-transform: uppercase;
    transition: 0.3s;
    div {
        padding: 1.4rem;
        background-color: rgba(233, 30, 98, 0.8);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    &:hover {
        transform: scale(1.1);
        box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.6);
    }
    &:nth-child(10n+1),
    &:nth-child(10n+3), 
    &:nth-child(10n+5), 
    &:nth-child(10n+7), 
    &:nth-child(10n+9) {
        div {
            background-color: rgba(255, 152, 0, 0.7)
        }
    }
    
`

export const Name = styled.p`
    background-color: white;
    padding: 0 0.2rem;
    color: black;
    span {
        color: #a1a1a1;
        display: block;
    }
    &:hover {
        cursor: pointer;
    }
`

export const Wrapper = styled.div`
    background-color: #ECFAFF;
    padding: 4.69rem;
    
`
export const Information = styled.div`
    padding: 3rem;
    width: 70%;
    opacity: 0.8;
    border: 2px solid #C3C6CE;
    margin: 0 auto;
    border-radius: 5px;
    font-family: 'Nunito', sans-serif;
    transition: 0.2s;
    &:hover {
        opacity: 1;
        overflow: visible;
        cursor: pointer;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
        border-color: #008bf8;
        a {
            transform: translate(-50%, 50%);
        }
    }
    overflow: hidden;
    position: relative;
`

export const Heading = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
    color: black;

`

export const Instruction = styled.h3`
    font-size: 2rem;
    text-align: center;
`

export const Text = styled.p`
    font-size: 1.5rem;
    padding: 2rem 3rem;
    text-align: center;
`
export const More = styled.a`
    background-color: #008bf8;
    padding: 1.2rem;
    border-radius: 5px;
    color: white;
    position: absolute;
    transform: translate(-50%, 100%);
    left: 50%;
    bottom: 0;
    transition: 0.8s;
`