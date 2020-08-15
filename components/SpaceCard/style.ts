import styled from 'styled-components';

export const SpaceCardStyle = styled.div`
    cursor: pointer;
    font-family: ${(props) => props.theme.font.regular};
    color: ${(props) => props.theme.colors.gray};
    width: 100%;
    height: 300px;
    border-bottom-style: solid;
    border-width: 4px;
    border-color: ${(props) => props.theme.colors.blue};
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
    margin-bottom: 24px;
    @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        width: 90vw;
    }
`;

export const Top = styled.div`
    font-weight: 600;
    font-size: 18px;
    padding: 12px 0;
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

export const Bottom = styled.div`
    font-size: 16px;
    padding: 0 0 8px;
    width: 90%;
`;
