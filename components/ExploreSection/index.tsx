import React, { FunctionComponent } from 'react';
import { ExploreSectionStyle, SectionCaption, CardGallery } from './style';
import MallCard from '@components/MallCard';
import { CenterButton } from '@components/Button';

const ExploreSection: FunctionComponent = () => {
    return (
        <ExploreSectionStyle>
            <SectionCaption>Explore Spaces in Tebet</SectionCaption>
            <CardGallery>
                <MallCard />
                <MallCard />
            </CardGallery>
            <SectionCaption></SectionCaption>
            <CenterButton ph="see more" href="/malls" w="144px" h="40px" bc="#FF427F" c="white" />
        </ExploreSectionStyle>
    );
};

export default ExploreSection;
