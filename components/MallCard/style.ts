import styled from 'styled-components';

export const MallCardStyle = styled.div`
    cursor: pointer;
    font-family: ${(props) => props.theme.font.regular};
    color: ${(props) => props.theme.colors.gray};
    width: 500px;
    height: 400px;
    border-bottom-style: solid;
    border-width: 4px;
    border-color: ${(props) => props.theme.colors.blue};
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
`;

export const Top = styled.div`
    font-weight: 600;
    font-size: 18px;
    padding: 12px 0;
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

export const Bottom = styled.div`
    font-size: 16px;
    padding: 0 0 8px;
    width: 90%;
`;

export const Bold = styled.span`
    font-weight: 600;
`;

export const Subscript = styled.span`
    margin-right: 4px;
    font-weight: 300;
    font-size: 12px;
`;
