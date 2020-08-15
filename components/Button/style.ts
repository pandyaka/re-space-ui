import styled from 'styled-components';

interface ButtonProps {
    w: string;
    h: string;
    bc: string;
    c: string;
    ws?: string;
    hs?: string;
}

export const ButtonStyle = styled.a<ButtonProps>`
    display: flex;
    background-color: ${(props) => props.bc};
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    color: ${(props) => props.c};
    text-decoration: none;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    font-family: ${(props) => props.theme.font.caption};
`;
