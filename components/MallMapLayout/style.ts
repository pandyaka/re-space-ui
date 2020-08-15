import styled from 'styled-components';
import Section from '@components/Section';
import { Image } from '@components/Image';

export const MallMapLayoutStyle = styled(Section)``;

export const MallMapGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 3fr 2fr;
    gap: 16px;
    height: 600px;
`;

export const MallCell = styled.div`
    display: flex;
    flex-direction: column;

    ${Image} {
        flex-grow: 1;
    }
`;

export const MapCell = styled.div`
    grid-row: span 2;
    background-color: ${(props) => props.theme.map.colors.bg};
`;
