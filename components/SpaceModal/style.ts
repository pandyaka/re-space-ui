import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { Image } from '@components/Image';
import { H2Style } from '@components/Typography';
import { ButtonStyle } from '@components/Button/style';

export const ModalStyle = Modal.styled`
    height: 100vh;
    width: min(800px, 90vw);
    background-color: white;
    overflow-y: scroll;
    position: fixed;
    right: 50px;

    @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        position: unset;
        right: unset;
    }
`;

export const PictureGrid = styled.div`
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
    grid-template-rows: repeat(2, 1fr);
`;

export const Cover = styled(Image)`
    grid-row: span 2;
`;

export const SpaceInfoGrid = styled.div`
    display: grid;
    padding: 16px;
    gap: 16px;
    grid-template-columns: 3fr 2fr;

    @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`;

export const SpaceInfo = styled.div``;

export const SpaceInfoTitle = styled(H2Style)`
    margin-bottom: 0;
`;

export const SpaceInfoSectionTitle = styled.span`
    display: block;
    font-size: 18px;
    font-family: ${(props) => props.theme.font.caption};
    margin-top: 16px;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const AllowedTenantGrid = styled.div`
    display: grid;
    margin-top: 16px;
    grid-template-columns: repeat(2, 1fr);
`;

export const AllowedTenantText = styled.span`
    margin-left: 8px;
`;

export const RentGridItem = styled.div`
    @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        grid-row: 1;
    }
`;

export const RentDialog = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid lightgray;
`;

export const PriceTag = styled(H2Style)`
    margin-bottom: 0;
`;

export const RentButton = styled(ButtonStyle)`
    cursor: pointer;
    padding: 12px 0;
    margin: 12px 0;
`;
