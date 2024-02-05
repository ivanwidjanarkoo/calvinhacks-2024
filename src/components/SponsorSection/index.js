import React from 'react';
import { SponsorContainer, SponsorImageContainer, SponsorSilver, SponsorBronze, SponsorGold, SponsorLink } from './SponsorElement';
import dornerworks from '../../image/dornerworks.png';
import spindance from '../../image/spindance.jpg';
import atomicobject from '../../image/atomic.png';
import tekton from '../../image/tekton.png';
import twisthink from '../../image/twisthink.png';
import calvin from '../../image/calvin.jpg'

const SponsorSection = () => {
    return (
        <SponsorContainer id='Sponsors'>
            <h1>Sponsors</h1>
            <SponsorImageContainer>
                <SponsorGold>
                    <SponsorLink href='https://www.tekton.com/'>
                        <img src={tekton} alt='tekton' />
                    </SponsorLink>
                </SponsorGold>
                <SponsorSilver>
                    <SponsorLink href='https://dornerworks.com/'>
                        <img src={dornerworks} alt='dornerworks' />
                    </SponsorLink>
                </SponsorSilver>
                <SponsorBronze>
                    {/*<SponsorLink href='https://spindance.com/'>
                        <img src={spindance} alt='spindance' />
    </SponsorLink>*/}
                    <SponsorLink href='https://twisthink.com/'>
                        <img src={twisthink} alt='twisthink' />
                    </SponsorLink>
                    {/*<SponsorLink href='https://calvin.edu/'>
                        <img src={calvin} alt='calvinuniversity' />
    </SponsorLink>*/}
                </SponsorBronze>
            </SponsorImageContainer>
        </SponsorContainer>
    )
}

export default SponsorSection
