import React, { FunctionComponent } from 'react';
import { NavbarStyle, LeftItem, RightItem } from './style';
import NavbarItem from '@components/NavbarItem';

const Navbar: FunctionComponent = () => {
    return (
        <NavbarStyle>
            <LeftItem>
                <NavbarItem href="/" title="re:Space" />
            </LeftItem>
            <RightItem>
                <NavbarItem href="/login" title="Login" />
                <NavbarItem href="/register" title="Sign Up" />
                <NavbarItem distinct href="/list" title="Rent Your Space" />
            </RightItem>
        </NavbarStyle>
    );
};

export default Navbar;
