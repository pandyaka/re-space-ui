import React, { FunctionComponent } from 'react';
import { LandingSearchStyle, WelcomeCaption } from './style';
import { SearchBar } from '@components/SearchBar';

const Landing: FunctionComponent = () => {
    return (
        <LandingSearchStyle>
            <WelcomeCaption>Find the Best Commercial Spaces for Your Business Now</WelcomeCaption>
            <SearchBar />
        </LandingSearchStyle>
    );
};

export default Landing;
