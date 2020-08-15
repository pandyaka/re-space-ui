import React, { SFC } from 'react';

import { AllSpaceStyle, AllSpaceTitle, CardGallery } from './style';
import SpaceCard from '@components/SpaceCard';

const AllSpace: SFC = () => {
    return (
        <AllSpaceStyle>
            <AllSpaceTitle>Available Spaces</AllSpaceTitle>
            <CardGallery>
                {[...Array(10).keys()].map((el, idx) => (
                    <SpaceCard key={idx} />
                ))}
            </CardGallery>
        </AllSpaceStyle>
    );
};

export default AllSpace;
