import React, { SFC } from 'react';
import PageLayout from '@components/PageLayout';
import { LandingLayout } from '@components/Layout';
import Landing from '@components/Landing';
import ExploreSection from '@components/ExploreSection';

const Index: SFC = () => {
    return (
        <PageLayout>
            <LandingLayout>
                <Landing />
                <ExploreSection />
            </LandingLayout>
        </PageLayout>
    );
};
export default Index;
