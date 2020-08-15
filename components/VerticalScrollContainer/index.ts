import styled from 'styled-components';

interface VerticalScrollContainerProps {
    width?: string;
    height?: string;
}

export default styled.div<VerticalScrollContainerProps>`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    box-sizing: content-box;
    scrollbar-width: 6px;
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.height ? props.height : '100%')};
`;
