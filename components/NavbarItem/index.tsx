import React, { FunctionComponent } from 'react';
import NavbarItemStyle from './style';
import LinkWrapper from '@components/LinkWrapper';

interface NavbarItemProps {
    title: string;
    distinct?: boolean;
    href?: string;
}

const NavbarItem: FunctionComponent<NavbarItemProps> = (props: NavbarItemProps) => {
    return (
        <LinkWrapper link={props.href}>
            <NavbarItemStyle distinct={props.distinct}>{props.title}</NavbarItemStyle>
        </LinkWrapper>
    );
};

export default NavbarItem;
