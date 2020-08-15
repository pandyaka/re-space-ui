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
                    <MallCard key={idx} id={mall.id} name={mall.name} location={mall.location} />
                ))}
            </CardGallery>
        </SearchSectionStyle>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { res } = ctx;
    const { location } = ctx.query;
    const url = `${process.env.API_URL}/malls`;

    try {
        const res = await fetch(url, {
            method: 'GET',
            body: JSON.stringify({ location: location })
        });
        const data = (await res.json()) as Mall[];

        return {
            props: {
                malls: data
            }
        };
    } catch (e) {
        res.setHeader('location', '/');
        res.statusCode = 302;
        res.end();
        return { props: {} };
    }
};

export default SearchResult;
