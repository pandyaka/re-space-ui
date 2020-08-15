import React, { FunctionComponent } from 'react';
import { SectionCaption, CardGallery } from '@components/ExploreSection/style';
import { SearchSectionStyle } from './style';
import MallCard from '@components/MallCard';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Mall from '@interfaces/mall';

interface MallsProps {
    malls: Mall[];
}

const SearchResult: FunctionComponent<MallsProps> = (props: MallsProps) => {
    const router = useRouter();
    const { location } = router.query;
    const { malls } = props;
    return (
        <SearchSectionStyle>
            <SectionCaption>Search results for {`"${location}"`}</SectionCaption>
            <CardGallery>
                {malls.map((mall, idx) => (
                    <MallCard
                        key={idx}
                        id={mall.id}
                        name={mall.name}
                        location={mall.location}
                        image_url={mall.image_url}
                    />
                ))}
            </CardGallery>
        </SearchSectionStyle>
    );
};

export default SearchResult;
