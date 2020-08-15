import styled from 'styled-components';

export const ExploreSectionStyle = styled.div`
    width: 100%;
    margin: 32px 0;
`;

export const SectionCaption = styled.div`
    font-family: ${(props) => props.theme.font.caption};
    color: ${(props) => props.theme.colors.blue};
    font-weight: 700;
    font-size: 24px;
    width: 100%;
    text-align: center;
`;

export const CardGallery = styled.div`
    margin: 48px auto;
    display: grid;
    gap: 8px;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
`;
