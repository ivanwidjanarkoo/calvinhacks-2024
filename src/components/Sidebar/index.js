import React from 'react'
import { SidebarContainer,NavItemResume, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideButtonContainer, SidebarRoute } from './SidebarElement'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='faq' onClick={toggle}>
                        FAQ
                    </SidebarLink>
                    <SidebarLink to='Schedule' onClick={toggle}>
                        Schedule
                    </SidebarLink>
                    <SidebarLink to='Sponsors' onClick={toggle}>
                        Sponsors
                    </SidebarLink>
                    <NavItemResume to='/Resume'>
                        Resume
                    </NavItemResume>
                </SidebarMenu>
                <SideButtonContainer>
                    <SidebarRoute to='./signup' onClick={toggle}>
                        Sign-Up for CalvinHacks
                    </SidebarRoute>
                    <SidebarRoute to='./signin' onClick={toggle}>
                        Sign-In
                    </SidebarRoute>
                </SideButtonContainer>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
