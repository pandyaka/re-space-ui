import React, { SFC } from 'react';
import PageLayout from '@components/PageLayout';
import { LandingLayout } from '@components/Layout';
import TopSearch from '@components/TopSearch';
import SearchResult from '@components/SearchResult';
import { GetServerSideProps } from 'next';
import Mall from '@interfaces/mall';

interface MallsProps {
    malls: Mall[];
}

const Index: SFC<MallsProps> = (props: MallsProps) => {
    const { malls } = props;
    return (
        <PageLayout>
            <TopSearch />
            <LandingLayout>
                <SearchResult malls={malls} />
            </LandingLayout>
        </PageLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { res } = ctx;
    const { location } = ctx.query;
    const url = `${process.env.API_URL}/malls?location=${location}`;

    try {
        const res = await fetch(url);
        const data = (await res.json()) as Mall[];

        return {
            props: {
                malls: data
            }
        };
    } catch (e) {
        console.log(e);
        res.setHeader('location', '/');
        res.statusCode = 302;
        res.end();
        return { props: {} };
    }
};

export default Index;
