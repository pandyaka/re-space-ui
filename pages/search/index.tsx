import React, { SFC } from 'react';
import PageLayout from '@components/PageLayout';
import { LandingLayout } from '@components/Layout';
import TopSearch from '@components/TopSearch';
import SearchResult from '@components/SearchResult';

const Index: SFC = () => {
    return (
        <PageLayout>
            <TopSearch />
            <LandingLayout>
                <SearchResult />
            </LandingLayout>
        </PageLayout>
    );
};
export default Index;
