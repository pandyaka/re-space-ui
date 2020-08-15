import styled from 'styled-components';
import Section from '@components/Section';

export const MallMapLayoutStyle = styled(Section)``;

export const MallMapGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 3fr 2fr auto;
    gap: 16px;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

export const MapCell = styled.div`
    grid-row: span 3;
    background-color: ${(props) => props.theme.map.colors.bg};

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        grid-row: 2;
    }
`;
