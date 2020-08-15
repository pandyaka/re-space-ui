import React, { FunctionComponent } from 'react';
import { Image } from '@components/Image';
import LandingSearch from '@components/LandingSearch';
import { LandingStyle } from './style';

const Landing: FunctionComponent = () => {
    return (
        <LandingStyle>
            <LandingSearch></LandingSearch>
            <Image largeOnly img="/images/landing.jpeg" w="300px" h="624px" />
        </LandingStyle>
    );
};

export default Landing;
