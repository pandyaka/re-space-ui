import React, { SFC } from 'react';
import { GetServerSideProps } from 'next';

import PageLayout from '@components/PageLayout';
import TopSearch from '@components/TopSearch';
import MallMapLayout from '@components/MallMapLayout';

interface MallProps {
    id: string;
}

const Mall: SFC<MallProps> = (props: MallProps) => {
    const { id } = props;

    return (
        <PageLayout>
            <TopSearch />
            <MallMapLayout />
        </PageLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.params.id;

    return {
        props: {
            id
        }
    };
};

export default Mall;
