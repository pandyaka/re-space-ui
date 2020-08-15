import styled from 'styled-components';

import Section from '@components/Section';
import { DropdownStyle } from '@components/Dropdown/style';

export const TopSearchStyle = styled(Section)`
    padding: 8px 0;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        ${DropdownStyle} {
            width: calc(50% - 40px);
        }
    }
`;
