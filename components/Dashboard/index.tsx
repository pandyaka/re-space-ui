import React, { FunctionComponent } from 'react';
import { DashboardStyle, DashboardCaption, SectionCaption, SectionDescription } from './style';
import WatchlistCard from '@components/WatchlistCard';
import VerticalScrollContainer from '@components/VerticalScrollContainer';
import ActiveSpaceCard from '@components/ActiveSpaceCard';
import { CardGallery } from '@components/ExploreSection/style';
import Watchlist from '@interfaces/watchlist';
import Rent from '@interfaces/rent';

interface DashboardProps {
    rents: Rent[];
    watchlists: Watchlist[];
}

const Dashboard: FunctionComponent<DashboardProps> = (props: DashboardProps) => {
    // const { watchlists, rents } = props;
    return (
        <DashboardStyle>
            <DashboardCaption>My Spaces</DashboardCaption>
            <SectionCaption>Watchlist</SectionCaption>
            <SectionDescription>See price fluctuation since you add space to watchlist</SectionDescription>
            <VerticalScrollContainer>
                <WatchlistCard />
                <WatchlistCard />
                <WatchlistCard />
            </VerticalScrollContainer>
            <SectionCaption>Active Spaces</SectionCaption>
            <SectionDescription>Monitor your active spaces and payment due</SectionDescription>
            <ActiveSpaceCard />
        </DashboardStyle>
    );
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     const { res, params } = ctx;
//     const userId = '1';
//     const urlWatchlists = `${process.env.API_URL}/rents/watch`;
//     const urlRents = `${process.env.API_URL}/rents/`;

//     try {
//         const resWatchlists = await fetch(urlWatchlists, {
//             method: 'GET',
//             body: JSON.stringify({ user_id: userId })
//         });
//         const dataWatchlists = (await resWatchlists.json()) as Watchlist[];

//         const resRents = await fetch(urlRents, {
//             method: 'GET',
//             body: JSON.stringify({ user_id: userId })
//         });
//         const dataRents = (await resRents.json()) as Rent[];

//         return {
//             props: {
//                 rents: dataRents,
//                 watchlists: dataWatchlists
//             }
//         };
//     } catch (e) {
//         res.setHeader('location', '/');
//         res.statusCode = 302;
//         res.end();
//         return { props: {} };
//     }
// };

export default Dashboard;
