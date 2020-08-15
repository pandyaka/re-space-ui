import React, { SFC } from 'react';
import { GetServerSideProps } from 'next';

import PageLayout from '@components/PageLayout';
import { LandingLayout } from '@components/Layout';
import Landing from '@components/Landing';
import ExploreSection from '@components/ExploreSection';
import Mall from '@interfaces/mall';

interface MallsProps {
    malls: Mall[];
}

const Index: SFC<MallsProps> = (props: MallsProps) => {
    const { malls } = props;
    return (
        <PageLayout>
            <LandingLayout>
                <Landing />
                <ExploreSection malls={malls} />
            </LandingLayout>
        </PageLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { res, params } = ctx;
    const url = `${process.env.API_URL}/malls`;

    try {
        const res = await fetch(url);
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

export default Index;
