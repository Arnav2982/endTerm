import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarEle';

const Navbar = () => {
return (
	<>
        <Nav>
            <Bars/>
            <NavMenu>
                <NavLink to='/home' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/Contact' activeStyle>
                    Contact
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In as Admin</NavBtnLink>
            </NavBtn>
        </Nav>
	</>
);
};

export default Navbar;
