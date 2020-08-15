import React, { FunctionComponent } from 'react';
import { ButtonStyle } from './style';
import LinkWrapper from '@components/LinkWrapper';

interface ButtonProps {
    w: string;
    h: string;
    bc: string;
    c: string;
    ph: string;
    href: string;
    ws?: string;
    hs?: string;
}

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    return (
        <LinkWrapper link={props.href}>
            <ButtonStyle w={props.w} h={props.h} bc={props.bc} c={props.c} href={props.href}>
                {props.ph}
            </ButtonStyle>
        </LinkWrapper>
    );
};
