import styled from 'styled-components';
import { Title, Subtitle } from '@components/Typography';

export const LandingSearchStyle = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
`;

export const WelcomeCaption = styled(Title)`
    display: block;
    margin: 0;
    width: 720px;
`;

export const WelcomeSubCaption = styled(Subtitle)`
    display: block;
    width: 720px;
    margin-bottom: 32px;
`;

export const SearchBottom = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
