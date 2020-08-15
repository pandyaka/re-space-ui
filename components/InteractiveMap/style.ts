import styled from 'styled-components';

interface InteractiveMapStyleProps {
    w?: string;
    h?: string;
}

export const InteractiveMapStyle = styled.div<InteractiveMapStyleProps>`
    position: sticky;
    top: 0;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        position: static;
        top: unset;
    }

    svg {
        width: ${(props) => props.w || '100%'};
        height: ${(props) => props.h || 'auto'};
        display: inline-block;
        background-color: ${(props) => props.theme.map.colors.bg};
    }

    path,
    rect {
        stroke: ${(props) => props.theme.map.colors.stroke};
        stroke-width: ${(props) => props.theme.map.sizes.stroke};
    }

    .hoverable {
        fill: ${(props) => props.theme.map.colors.available};
        transition-duration: 0.2s;

        &:hover {
            fill: ${(props) => props.theme.colors.pink};
            stroke: ${(props) => props.theme.colors.pink};
        }
    }

    .occupied {
        fill: ${(props) => props.theme.map.colors.occupied};
    }
`;
