import styled from 'styled-components';

export const DropdownStyle = styled.select`
    appearance: none;
    background-color: white;
    width: 200px;
    height: 50px;
    font-family: ${(props) => props.theme.font.caption};
    background-image: url('/icons/down-arrow.svg');
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%;
    background-size: 1em auto;
    border-style: none;
    border-bottom-style: solid;
    border-width: 2px;
    border-color: #000;
    padding: 0 16px;
    font-size: 18px;
    font-weight: 600;
    :focus {
        outline: 0;
    }
    margin: 4px;
`;
