import styled from 'styled-components';

interface ImageProps {
    w: string;
    h: string;
    img: string;
    ws?: string;
    hs?: string;
}

export const Image = styled.div<ImageProps>`
    height: ${(props) => props.h};
    width: ${(props) => props.w};
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
`;
