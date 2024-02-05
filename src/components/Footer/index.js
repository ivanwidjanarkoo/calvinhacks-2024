import React from 'react'
import { FooterContainer, SocialMediaContainer, InfoContainer, ContentContainer, StyledLink } from './FooterElement'
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from 'react-icons';

function FooterSection() {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '30px' }}>
                <FooterContainer>
                    <ContentContainer>
                        <InfoContainer>
                            <p>More Info</p>
                            <StyledLink><a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">MLH Code of Conduct</a></StyledLink> | <StyledLink><a href="https://calvinhacks-2023.devpost.com/" target="_blank" rel="noopener noreferrer">Devpost</a></StyledLink> | <StyledLink><a href="https://discord.gg/cyXUzYnrn8" target="_blank" rel="noopener noreferrer">Discord</a></StyledLink>
                            <p>Copyright @ CalvinHacks 2022</p>
                        </InfoContainer>
                        <SocialMediaContainer>
                            <p> Follow us on social media!</p>
                            <a href="https://www.instagram.com/calvinhacks/" target="_blank" rel="noopener noreferrer">
                                <BsInstagram />
                            </a>
                            <a href="mailto:hacks@calvin.edu" target="_blank" rel="noopener noreferrer">
                                <AiOutlineMail />
                            </a>
                        </SocialMediaContainer>
                    </ContentContainer>
                </FooterContainer>
            </IconContext.Provider>
        </>
    )
}

export default FooterSection
