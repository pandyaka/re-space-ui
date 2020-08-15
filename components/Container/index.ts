import styled from 'styled-components';

export default styled.div`
    width: 1200px;
    margin: 0 auto;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
        width: 90vw;
    }
`;
