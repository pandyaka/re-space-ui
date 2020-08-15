import React, { FunctionComponent } from 'react';
import { SectionCaption, CardGallery } from '@components/ExploreSection/style';
import { SearchSectionStyle } from './style';
import MallCard from '@components/MallCard';

const SearchResult: FunctionComponent = () => {
    return (
        <SearchSectionStyle>
            <SectionCaption>
                Search results for {'"'}Tebet, Jakarta Selatan{'"'}
            </SectionCaption>
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
