import styled from 'styled-components';

export const ActiveTenantCardStyle = styled.div`
    font-family: ${(props) => props.theme.font.regular};
    color: ${(props) => props.theme.colors.gray};
    background: white;
    width: 200px;
    height: 140px;

    margin: 0 4px;
    padding: 8px;

    border-bottom-style: solid;
    border-width: 4px;
    border-color: ${(props) => props.theme.colors.pink};

    display: flex;
    flex-direction: column;
    flex: auto 0 0;
    box-sizing: border-box;

    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);

    &:first-child {
        margin-left: 0;
    }
`;

export const CardTitle = styled.span`
    font-weight: 700;
`;

export const CardDetail = styled.span`
    display: block;
    padding: 4px 0;
    border-collapse: collapse;
    border-top: 1px solid ${(props) => props.theme.colors.gray};
    border-bottom: 1px solid ${(props) => props.theme.colors.gray};

    &:first-child {
        border-top: 2px solid ${(props) => props.theme.colors.gray};
    }

    &:last-child {
        border-bottom: none;
    }
`;
