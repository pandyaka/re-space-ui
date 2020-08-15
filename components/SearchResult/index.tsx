import React, { FunctionComponent } from 'react';
import { SectionCaption, CardGallery } from '@components/ExploreSection/style';
import { SearchSectionStyle } from './style';
import MallCard from '@components/MallCard';
import { useRouter } from 'next/router';

const SearchResult: FunctionComponent = () => {
    const router = useRouter();
    const { location, contractType, spaceType } = router.query;
    return (
        <SearchSectionStyle>
            <SectionCaption>Search results for {`"${location}"`}</SectionCaption>
            <CardGallery>
                <MallCard />
                <MallCard />
                <MallCard />
                <MallCard />
            </CardGallery>
        </SearchSectionStyle>
    );
};

export default SearchResult;
