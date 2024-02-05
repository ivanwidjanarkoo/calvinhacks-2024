import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'


export const Nav = styled.nav`
    background: #FFF;
    height: 80px;
    margin-top: -80px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: sticky;
    top:0;
    z-index: 100;
    padding: 0;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;


export const NavbarContainer = styled.div `
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 10;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 760px) {
        display:block;
        position: absolute;
        top: 0;
        left: 50px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`

export const NavLogo = styled(LinkR)`
    color: black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left:10px;
    text-decoration: none;

    img {
        width: 80px;
        height:80px;
    }

    p {
        text-transform: uppercase;
        font-weight: 600;

    }

    &.link {
        text-decoration: none;
    }

    @media screen and (max-width: 1000px) {
        p {
            display: none;
        }
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -10px;

    @media screen and (max-width: 760px) {
        display:none;
    }
`;

export const NavItem = styled.li `
    height: 80px;
`;

export const NavItemResume = styled(LinkR)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: .1rem;

    &.active {
        border-bottom: 5px solid #8C2131;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #F3CD00;
    }
`

export const NavLinks = styled(LinkS)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: .1rem;

    &.active {
        border-bottom: 5px solid #8C2131;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #8C2131;
    }

    @media screen and (max-width: 1000px) {
    }
`;

export const NavButton = styled.nav `
    display:flex;
    align-items: center;
    margin-right: 30px;

    @media screen and (max-width: 760px) {
        display:none;
    }
`

export const NavButtonLink = styled(LinkR)`
    border-radius: 50px;
    background: #8C2131;
    white-space:nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #F3CD00;
        color: white;

    }
`