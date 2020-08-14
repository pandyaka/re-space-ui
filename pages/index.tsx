import React, { SFC } from 'react';
import PageLayout from '@components/PageLayout';
import { LandingLayout } from '@components/Layout';
import Landing from '@components/Landing';

const Index: SFC = () => {
    return (
        <PageLayout>
            <LandingLayout>
                <Landing />
            </LandingLayout>
        </PageLayout>
    );
};
export default Index;
