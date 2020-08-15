import styled from 'styled-components';

export const ActiveCardStyle = styled.div`
    cursor: pointer;
    font-family: ${(props) => props.theme.font.regular};
    color: ${(props) => props.theme.colors.gray};
    border-bottom-style: solid;
    border-width: 4px;
    border-color: ${(props) => props.theme.colors.blue};
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    -webkit-box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
    border-right-style: solid;
    border-right-width: 4px;
    min-height: 300px;
    flex: auto 0 0;
    width: 100%;
    margin: 24px;
    border-bottom: none;
    @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        width: 90vw;
        grid-template-columns: 1fr;
        margin: 0 0 16px;
    }
`;

export const Top = styled.div`
    font-weight: 600;
    font-size: 18px;
    padding: 0;
    width: 90%;
    margin: 12px 0;
    display: flex;
    justify-content: space-between;
`;

export const SpaceInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: start;
    padding: 24px 0;
`;

export const BillInfo = styled.div`
    align-self: start;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface ImageProps {
    w: string;
    h: string;
    img: string;
    ws?: string;
    hs?: string;
    largeOnly?: boolean;
}

export const Image = styled.div<ImageProps>`
    height: ${(props) => props.h};
    width: ${(props) => props.w};
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        display: ${(props) => (props.largeOnly ? 'none' : 'block')};
    }
`;
