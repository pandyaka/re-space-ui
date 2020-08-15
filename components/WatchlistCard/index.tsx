import React, { FunctionComponent } from 'react';
import { WatchlistCardStyle, Top } from './style';
import { Subscript, Bold } from '@components/MallCard/style';
import { Bottom } from '@components/SpaceCard/style';
import { Image } from '@components/Image';
import LinkWrapper from '@components/LinkWrapper';

const WatchlistCard: FunctionComponent = () => {
    return (
        <LinkWrapper link="/mall/1" as="mall/1">
            <WatchlistCardStyle>
                <Image img="/images/space-placeholder.jpg" w="100%" h="220px" />
                <Top>
                    <div>Kota Kasablanka</div>
                    <div>
                        <Subscript>now</Subscript>Rp41jt/month
                    </div>
                </Top>
                <Top>
                    <div>Retail</div>

                    <div>
                        <Subscript>decreased</Subscript>Rp4jt
                    </div>
                </Top>
                <Bottom>
                    <div>Address</div> <div>Jl. Casablanca Raya Kav. 88, Menteng Dalam, Jakarta Selatan</div>
                </Bottom>
                <Bottom>
                    <div>Floor</div> <div>LG</div>
                </Bottom>
                <Bottom>
                    <div>Size</div> <div>24Msq</div>
                </Bottom>
                <Bottom>
                    <div>Space No.</div> <div>69A</div>
                </Bottom>
            </WatchlistCardStyle>
        </LinkWrapper>
    );
};

export default WatchlistCard;
