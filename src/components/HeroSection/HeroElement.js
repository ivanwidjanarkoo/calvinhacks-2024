import styled, { keyframes } from 'styled-components';

export const HeroContainer = styled.div`
    background: white;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    margin-top:80px;

    @media only screen and (max-width: 1000px) {
        overflow: hidden;
        height: auto;
    }
`

export const slideinLeft = keyframes`
    0% {
        right : 800px;
    } 100%  {
        right: 630px;
    }
`
export const slideinRight = keyframes`
    0% {
        left : 300px;
    } 100%  {
        left: 0px;
    }
`

export const HeroImageContainer = styled.div`
    display: flex;
    width:1000px;
    justify-content: center;
    margin-top: 30px;

    @media screen and (max-width: 1000px) {
        width: 800px;
        margin-top: 100px;
    }

`

export const HeroImageLeft = styled.div`
    width: 50%;
    overflow: hidden;

    img {
        position:relative;
        animation-name: ${slideinLeft};
        animation-duration: 2s;
        animation-iteration-count: 1;
        right: 528px;
    }

    @media screen and (max-width: 1000px) {
        img {
            right: 630px;
        }
    }

`

export const HeroImageRight = styled.div`
    width: 50%;
    overflow: hidden;

    img {
        position:relative;
        animation-name: ${slideinRight};
        animation-duration: 2s;
        animation-iteration-count: 1;
        left: -101px;
    }
`

export const blink = keyframes`
    0% {
        opacity :0.0;
    }
    75% {
        opacity: 0.0;
    }
    80% {
        opacity: 1.0;
    }
    85% {
        opacity: 0.1;
    }
    95%{
        opacity: 0.5;
    }
    100% {
        opacity :1;
    }
`

export const SignupInfo = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation-name: ${blink};

    animation-fill-mode: forwards;
    animation-duration: 3s;
    animation-iteration-count: 1;
`

export const HeroH1 = styled.h1`
    color: #8C2131;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 50px;
    font-family: 'Open Sans', sans-serif;
    margin: 0 0;

    @media only screen and (max-width: 1000px) {
        font-size: 40px;
        font-weight: 1000;
    }

    @media only screen and (max-width: 600px) {
        width: 80%;
        font-size: 35px;
    }

`

export const HeroP = styled.p`
    color: #4b4b4b;
    font-size: 28px;
    text-align: center;
    line-height: 1.5;
    margin: 0 0;

    @media only screen and (max-width: 1000px) {
        font-size: 20px;
        text-transform: uppercase;
        width: 80%;
    }

`

export const HeroButtonContainer = styled.div`
    display: flex;
    width: 30%;
    margin-top: 30px;
    justify-content: space-evenly;
`
