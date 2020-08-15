import React, { FunctionComponent } from 'react';
import { ExploreSectionStyle, SectionCaption, CardGallery } from './style';
import MallCard from '@components/MallCard';
import { CenterButton } from '@components/Button';
import Mall from '@interfaces/mall';

interface MallsMapProps {
    malls: Mall[];
}

const ExploreSection: FunctionComponent<MallsMapProps> = (props: MallsMapProps) => {
    const { malls } = props;

    return (
        <ExploreSectionStyle>
            <SectionCaption>Explore Spaces in Tebet</SectionCaption>
            <CardGallery>
                {malls.map((mall, idx) => (
                    <MallCard key={idx} id={mall.id} name={mall.name} location={mall.location} />
                ))}
            </CardGallery>
            <CenterButton ph="see more" href="/malls" w="144px" h="40px" bc="#FF427F" c="white" />
        </ExploreSectionStyle>
    );
};

export default ExploreSection;
