import styled from 'styled-components';

export const NavbarStyle = styled.div`
    font-family: ${(props) => props.theme.font.regular};
    padding: 2vh 5vw;
    font-weight: 600;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
