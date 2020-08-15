import styled from 'styled-components';

export const LandingSearchStyle = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
`;

export const WelcomeCaption = styled.div`
    font-family: ${(props) => props.theme.font.caption};
    color: ${(props) => props.theme.colors.pink};
    font-weight: 700;
    font-size: 48px;
    width: 720px;
`;

export const SearchBottom = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
