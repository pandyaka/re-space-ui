import styled from 'styled-components';

interface TypographyProps {
    color?: string;
    size?: string;
}

export const Title = styled.h1<TypographyProps>`
    font-family: ${(props) => props.theme.font.caption};
    color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.pink)};
    font-weight: 700;
    font-size: 48px;
`;

export const Subtitle = styled.span<TypographyProps>`
    font-family: ${(props) => props.theme.font.caption};
    color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.blue)};
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 32px;
`;

export const H2Style = styled.h2<TypographyProps>`
    font-family: ${(props) => props.theme.font.caption};
    color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.blue)};
    font-weight: 700;
    font-size: 24px;
`;
