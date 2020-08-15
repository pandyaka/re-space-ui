import React, { FunctionComponent } from 'react';
import { ExploreSectionStyle, SectionCaption } from './style';
import MallCard from '@components/MallCard';

const ExploreSection: FunctionComponent = () => {
    return (
        <ExploreSectionStyle>
            <SectionCaption>Explore Spaces in Tebet</SectionCaption>
            <MallCard></MallCard>
        </ExploreSectionStyle>
    );
};

export default ExploreSection;
