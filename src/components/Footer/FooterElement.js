import styled from "styled-components";

export const FooterContainer = styled.div`
    background: #8C2131;
    height:120px;
    `

export const ContentContainer = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    height: 100%;
    justify-content:space-evenly;
    align-content: center;
    align-items: center;
    margin: auto auto;
`

export const SocialMediaContainer = styled.div`
    color: white;

    a {
      margin-left: 30px
    }

    @media screen and (max-width: 1000px) {
        p {
        line-height: 10px;
        font-size: 14px;
    }
    }  
`

export const InfoContainer = styled.div`
    color: white;
    
    p {
        line-height: 10px;
        font-size: 16px;
    }

        
    @media screen and (max-width: 1000px) {
        p {
        line-height: 10px;
        font-size: 14px;
    }
    }  
`

export const StyledLink = styled.a`
    a {
      color: #FFF;
    }
    a:hover {
      color: #F3CD00;
    }
`