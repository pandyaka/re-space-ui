import styled from 'styled-components';

interface NavabarItemStyleProps {
    distinct?: boolean;
}

const NavabarItemStyle = styled.a<NavabarItemStyleProps>`
    text-decoration: none;
    font-weight: 600;
    padding: 7px 4px;
    margin: 0 0.5vw;
    color: ${(props) => (props.distinct ? props.theme.colors.blue : props.theme.colors.gray)};
    font-style: ${(props) => props.theme.font.caption};
    border-style: ${(props) => (props.distinct ? 'solid' : 'unset')};
`;

export default NavabarItemStyle;
