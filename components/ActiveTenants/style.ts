import styled, { css } from 'styled-components';

import { H3Style } from '@components/Typography';

interface OptionPros {
    selected: boolean;
}

export const ActiveTenantsStyle = styled.div`
    border-radius: ${(props) => props.theme.borderRadius};
    background: ${(props) => props.theme.colors.softPink};
    overflow: hidden;
    padding: 16px;
`;

export const ActiveTenantsHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
`;

export const ActiveTenantsTitle = styled(H3Style)`
    display: block;
    width: 160px;
    padding: 4px;
    margin: 0 8px;
`;

export const ActiveTenantsOption = styled.span<OptionPros>`
    display: block;
    white-space: nowrap;
    padding: 4px;
    margin: 0 8px;
    cursor: pointer;

    ${(props) =>
        props.selected &&
        css`
            background: ${(props) => props.theme.colors.pink};
            color: white;
            border-radius: 4px;
        `}
`;
