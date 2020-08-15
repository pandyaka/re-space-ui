import styled from 'styled-components';
import { SpaceCardStyle } from '@components/SpaceCard/style';

export const WatchlistCardStyle = styled(SpaceCardStyle)`
    height: unset;
    min-height: 300px;
    flex: auto 0 0;
    width: 400px;
    margin: 24px;
`;

export const Top = styled.div`
    font-weight: 600;
    font-size: 18px;
    padding: 0;
    width: 90%;
    margin: 6px 0;
    display: flex;
    justify-content: space-between;
`;
