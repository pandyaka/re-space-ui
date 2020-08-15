import styled from 'styled-components';

interface ContainerProps {
    flex?: boolean;
}

export default styled.div<ContainerProps>`
    width: 1200px;
    margin: 0 auto;
    display: ${(props) => (props.flex ? 'flex' : null)};

    @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
        width: 90vw;
    }
`;
