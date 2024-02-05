import FaqSection from '../components/FaqSection';
import HeroSection from '../components/HeroSection';
import ScheduleSection from '../components/ScheduleSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import FooterSection from '../components/Footer';
import SponsorSection from '../components/SponsorSection';
import AboutSection from '../components/AboutSection';
import SignupPage from './signup';

import React, { useState } from 'react';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    // closes sidebar
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection />
            <FaqSection />
            <ScheduleSection />
            <SponsorSection />
            <FooterSection />
        </>
    );
}

export default Home;
