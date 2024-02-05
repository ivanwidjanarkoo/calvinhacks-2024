import React, { useEffect, useState } from 'react';

import {
    Parallax, FrontImg, MidImg, BackImg, DetailSectionText,
    BackgroundImg, DescriptionP, AboutSectionContainer, DescriptionP1,
    AboutDescriptionSection, ImgFront, ImgMid, ImgBack, TextWithImageSection,
    DetailSection, ImgBackground
} from './AboutElement';

import dev from '../../image/develope.png'
import learn from '../../image/learn.png'
import meet from '../../image/meet.png'
import testing from '../../image/test.png'


import parallax_background1 from '../../image/parallax_background-01.png'
import parallax_back1 from '../../image/parallax_back-01-01.png'
import parallax_mid from '../../image/parallax_mid-01.png'
import parallax_front from '../../image/parallax_front-01.png'

const AboutSection = () => {

    // state to keep track of how many px scrolled
    const [scroll, setScroll] = useState(window.scrollY);
    const handleScroll = () => setScroll(window.scrollY);

    // set up listener on window to update scroll state on scroll
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);


    return (
        <AboutSectionContainer id="about">

            <Parallax>
                <section>
                    <FrontImg>
                        <ImgFront src={parallax_front} alt='front'
                            heightValue={scroll * .15} />
                    </FrontImg>
                    <MidImg>
                        <ImgMid src={parallax_mid} alt='mid'
                            heightValue={scroll * .3} />
                    </MidImg>
                    <BackImg>
                        <ImgBack src={parallax_back1} alt='back'
                            heightValue={scroll * .4} />
                    </BackImg>
                    <BackgroundImg>
                        <ImgBackground src={parallax_background1}
                            alt='background' heightValue={scroll * .4} />
                    </BackgroundImg>
                </section>
            </Parallax>

            <AboutDescriptionSection>
                {/* <p>Px scrolled: {scroll}</p> */}
                <DescriptionP>
                    <h1>
                        CalvinHacks is a 24Hr hackathon at Calvin University
                    </h1>
                    <h4>We believe through CalvinHacks participants will </h4>
                    <img src={testing} alt='testing'></img>
                </DescriptionP>
                <TextWithImageSection>
                    <DetailSection>
                        <img src={meet} alt='circle' ></img>
                        <DetailSectionText>
                            <h3>Bond with </h3>
                            <p>
                                like-minded individuals and make new friends
                                while enjoying our free snacks and drinks
                            </p>
                        </DetailSectionText>
                    </DetailSection>
                    <DetailSection>
                        <img src={learn} alt='circle'></img>
                        <DetailSectionText>
                            <h3>Learn new skills </h3>
                            <p>
                                beyond Computer Science through others and our workshops
                            </p>
                        </DetailSectionText>
                    </DetailSection>
                    <DetailSection>
                        <img src={dev} alt='dev'></img>
                        <DetailSectionText>
                            <h3>Develop projects </h3>
                            <p>
                                that will come to live for judges to give
                                feedback and improve
                            </p>
                        </DetailSectionText>
                    </DetailSection>
                </TextWithImageSection>
                <DescriptionP1>
                    $2000 in Prizes!
                </DescriptionP1>
            </AboutDescriptionSection>

        </AboutSectionContainer>
    )
}

export default AboutSection
