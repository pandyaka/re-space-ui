import React, { FunctionComponent } from 'react';
import { DashboardStyle, DashboardCaption, SectionCaption, SectionDescription } from './style';
import WatchlistCard from '@components/WatchlistCard';
import VerticalScrollContainer from '@components/VerticalScrollContainer';
import ActiveSpaceCard from '@components/ActiveSpaceCard';
import { CardGallery } from '@components/ExploreSection/style';

const SearchResult: FunctionComponent = () => {
    return (
        <DashboardStyle>
            <DashboardCaption>My Spaces</DashboardCaption>
            <SectionCaption>Watchlist</SectionCaption>
            <SectionDescription>See price fluctuation since you add space to watchlist</SectionDescription>
            <VerticalScrollContainer>
                <WatchlistCard />
                <WatchlistCard />
                <WatchlistCard />
                <WatchlistCard />
            </VerticalScrollContainer>
            <SectionCaption>Active Spaces</SectionCaption>
            <SectionDescription>Monitor your active spaces and payment due</SectionDescription>
            <ActiveSpaceCard />
            <ActiveSpaceCard />
            <ActiveSpaceCard />
        </DashboardStyle>
    );
};

export default SearchResult;
