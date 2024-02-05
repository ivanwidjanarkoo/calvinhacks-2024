import styled from 'styled-components'

export const SponsorContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        text-transform: uppercase;
    }
`

export const SponsorImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const SponsorLink = styled.a`
    filter: grayscale(100%);
    transition: all 0.3s ease-in-out;

    &:hover {
        filter: grayscale(0%);
    }
`
export const SponsorGold = styled.div`
    width: 100%;

    img {
        width: 500px;
        height: 500x;
        object-fit: contain;
    }

    &:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(1.05);
    }

    @media screen and (max-width: 615px) {
        display: flex;
        flex-direction: column ;
    }
`

export const SponsorSilver = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row ;
    justify-content:center;

    img {
        width: 250px;
        height: 250px;
        object-fit: contain;
        margin: 0 10px 0px 10px;
    }

    &:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(1.05);
    }

    @media screen and (max-width: 615px) {
        display: flex;
        flex-direction: column ;
    }
`

export const SponsorBronze = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row ;
    justify-content:center;

    img {
        width: 200px;
        height: 200px;
        object-fit: contain;
        margin: 0 10px 0px 10px ;
    }

    &:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(1.05);
    }

    @media screen and (max-width: 615px) {
        display: flex;
        flex-direction: column ;
    }
`
