import styled from 'styled-components';

export const NavbarStyle = styled.div`
    font-family: ${(props) => props.theme.font.regular};
    padding: 2vh 5vw;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const LeftItem = styled.div`
    display: flex;
    @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        justify-content: center;
        width: 90vw;
        text-align: center;
        padding: 0 0 2vh;
    }
`;

export const RightItem = styled.div`
    display: flex;
    @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        width: 90vw;
        justify-content: space-between;
    }
`;
