import styled from 'styled-components'

export const AboutSectionContainer = styled.div`
    display:inline-flex;
    flex-direction: column;
    background: #FFF;
    width:100%;
    color: white;
    height: auto;
    margin-top: 50px;
    overflow: hidden;

    @media screen and (max-width: 1000px) {
        height: auto;
    }
`

export const Parallax = styled.div`
        width: 100%;
        height: 80vh;

    * {
        scroll-behavior: smooth;
    }

    section {
        position:relative;
        width: 100%;
        height: 100%;

    }

    section img {
        position:absolute;
        /* top:0;
        left: 0; */
        object-fit: cover;
        width: 100%;
        height: 100%;

    }
`

export const FrontImg = styled.div`
`

export const ImgFront = styled.img`
    z-index: 10;
    top:${props => props.heightValue * .1}px;

    @media screen and (max-width: 1000px) {
        top:${props => props.heightValue * .1}px;
    }

`

export const MidImg = styled.div`

`

export const ImgMid = styled.img`
    z-index: 9;
    top:${props => props.heightValue * .5}px;

    @media screen and (max-width: 1000px) {
        top:${props => props.heightValue * .01}px;
    }

`

export const BackImg = styled.div`

`
export const ImgBack = styled.img`
    z-index: 8;
    top:${props => props.heightValue * .2}px;

    @media screen and (max-width: 1000px) {
        top:${props => props.heightValue * .02}px;
    }

`


export const BackgroundImg = styled.div`
`
export const ImgBackground = styled.img`
     z-index: 7;
     /* top:${props => props.heightValue}px;

     @media screen and (max-width: 1000px) {
        top:${props => props.heightValue * .05}px;
    }   */
`


export const AboutDescriptionSection = styled.div`
    height: auto;
    width: 100%;
    text-align: center;
    /* background: linear-gradient(135deg, rgba(61,75,94,1) 0%, rgba(25,31,39,1) 49%, rgba(9,14,20,1) 100%); */
    background: #191F27;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0;
    z-index: 9;

`

export const DescriptionP = styled.p`
    width: 100%;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 0px;

    h1 {
        font-size: 30px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
        margin: 0 0;
        margin-top: 30px;
    }

    h4 {
        font-size: 25px;
        margin: 0 0;
        font-weight: 200;
        color: #fff;
    }

    img {
        max-width: 1576px;
        width: 90%;
        height: auto;
    }
    @media screen and (max-width: 1000px) {
        width: 80%;

        img {
            display:none ;
        }

        h1 {
        font-size: 25px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
        margin: 0 0;
        margin-top: 30px;
    }

        h4 {
            font-size: 20px;
            margin: 0 0;
            font-weight: 200;
            color: #fff;
        }


    }
`

export const DetailSection = styled.div`
    max-width: 40%;
    width: 400px;

    img {
        display: none;
    }
        @media screen and (max-width: 1000px) {
        max-width: 80%;
        margin-top: 30px;
        margin-bottom: 30px;
        width: 90%;
        display:flex;

        img {
            display: flex;
            width: 300px;
            height: 150px;
            object-fit: contain;
            margin: auto auto;
        }

        width: 90%;
        display:flex;
        margin: auto auto;
        flex-direction: column;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

`

export const DetailSectionText = styled.div`
    width: 80%;
    margin: auto;
    overflow: hidden;



    p {
        font-size: 17px;
        font-weight: 400;
        margin: 0 0;
        text-transform: none;
    }
    h3 {
        margin: 0 0;
        font-size: 25px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
        margin-bottom: 10px;
    }
`

export const TextWithImageSection = styled.div`
    display:flex;
    justify-content: space-evenly;
    width:100%;

    @media screen and (max-width: 1000px) {
        display:flex;
        flex-direction: column;
        margin-top: 30px;
        margin-bottom: 30px;
    }
`

export const DescriptionP1 = styled.div`
width: 80%;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 30px;
    margin-top: 30px;

`
