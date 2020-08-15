import styled from 'styled-components';

import { H2Style } from '@components/Typography';
import { Image } from '@components/Image';

export const MallHeadlineStyle = styled.div`
    display: flex;
    flex-direction: column;

    ${Image} {
        flex-grow: 1;
    }
`;

export const MallName = styled(H2Style)`
    margin-bottom: 0;
`;
