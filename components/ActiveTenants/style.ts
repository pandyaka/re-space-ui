import styled from 'styled-components';

export const ActiveTenantsStyle = styled.div`
    border-radius: ${(props) => props.theme.borderRadius};
    background: ${(props) => props.theme.colors.softPink};
    padding: 16px;
`;

export const ActiveTenantsHeader = styled.div`
    display: flex;
`;
