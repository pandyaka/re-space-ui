import styled from 'styled-components';
import { H2Style } from '@components/Typography';

export const AllSpaceTitle = styled(H2Style)`
    margin-top: 0;
`;

export const AllSpaceStyle = styled.div`
    grid-column: 2;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        grid-column: auto;
    }
`;

export const CardGallery = styled.div`
    display: grid;
    gap: 8px;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);

    @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`;
