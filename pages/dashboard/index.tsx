import React, { SFC } from 'react';
import PageLayout from '@components/PageLayout';
import { LandingLayout } from '@components/Layout';
import Dashboard from '@components/Dashboard';

const Index: SFC = () => {
    return (
        <PageLayout>
            <LandingLayout>
                <Dashboard />
            </LandingLayout>
        </PageLayout>
    );
};
export default Index;
