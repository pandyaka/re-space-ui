import React, { FunctionComponent } from 'react';
import { LandingSearchStyle, WelcomeCaption, WelcomeSubCaption, SearchBottom } from './style';
import { SearchBar } from '@components/SearchBar';
import Dropdown from '@components/Dropdown';
import { Button } from '@components/Button';

const Landing: FunctionComponent = () => {
    return (
        <LandingSearchStyle>
            <WelcomeCaption>Find the Best Commercial Spaces for Your Business Now</WelcomeCaption>
            <WelcomeSubCaption>
                Make your decision by reviewing floor plans and spot tenants with similiar business
            </WelcomeSubCaption>
            <SearchBar />
            <SearchBottom>
                <Dropdown />
                <Dropdown />
                <Button ph="search" href="/search" w="144px" h="40px" bc="#FF427F" c="white" />
            </SearchBottom>
        </LandingSearchStyle>
    );
};

export default Landing;
