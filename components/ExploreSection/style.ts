import styled from 'styled-components';
import { H2Style } from '@components/Typography';

export const ExploreSectionStyle = styled.div`
    width: 100%;
    margin: 32px 0;
`;

export const SectionCaption = styled(H2Style)`
    text-align: center;
`;

export const CardGallery = styled.div`
    margin: 48px auto;
    display: grid;
    gap: 8px;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
`;
