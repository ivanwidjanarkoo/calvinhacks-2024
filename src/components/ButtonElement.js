import styled from "styled-components";

import { Link as LinkR } from 'react-router-dom'

export const Button = styled(LinkR)`
    border-radius: 15px;
    width: 100px;
    background: ${({primary}) => (primary ? '#8C2131' : '#fff')};
    white-space: nowrap;
    margin-right:30px;
    border: ${({liner}) => (liner ? '2px solid #8C2131' : 'none' )};
    padding: ${({big}) => (big ? '14px 30px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#8C2131')};
    font-size: ${({fontLarge}) => (fontLarge ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#F3CD00' : '#8C2131')};
        color: ${({dark})=> (dark ? '#fff' : '#fff')}
    }
`

export const ButtonSponsor = styled.button`
    border-radius: 15px;
    width: 160px;
    background: ${({primary}) => (primary ? '#8C2131' : '#fff')};
    white-space: nowrap;
    margin-right:30px;
    border: ${({liner}) => (liner ? '2px solid #8C2131' : 'none' )};
    padding: ${({big}) => (big ? '14px 30px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#8C2131' : '#fff')};
    font-size: ${({fontLarge}) => (fontLarge ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#F3CD00' : '#8C2131')};
        color: ${({dark})=> (dark ? '#fff' : '#fff')}
    }
    
    a {
        color: #8C2131;
    }

    a:link {
        text-decoration: none;
    }

    a:hover {
        color: #fff;
    }
`
