import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
    position: relative;
    display: flex;
    width: 600px;
`;

export const SearchIcon = styled.div`
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 12px;
`;

export const SearchField = styled.input`
    border: 1px solid grey;
    height: 50px;
    width: 100%;
    outline: 0;
    padding: 0 16px;
    font-family: ${(props) => props.theme.font.caption};
    font-weight: 600;
    font-size: 24px;
    border-style: none;
    border-bottom-style: solid;
    border-width: 2px;
    border-color: #000;
`;
