import styled, { css } from 'styled-components';

interface SectionProps {
    lined?: boolean;
    fullHeight?: boolean;
    noPadding?: boolean;
}

export default styled.section<SectionProps>`
    padding: 16px 0;
    box-sizing: border-box;

    ${(props) =>
        props.noPadding &&
        css`
            padding: 0;
        `}

    ${(props) =>
        props.lined &&
        css`
            border-top: 1px solid ${props.theme.colors.gray};
            border-bottom: 1px solid ${props.theme.colors.gray};
            border-collapse: collapse;
        `}

    ${(props) =>
        props.fullHeight &&
        css`
            min-height: 100vh;
        `}
`;
