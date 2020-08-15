import React, { FunctionComponent } from 'react';
import { ActiveCardStyle, Top, SpaceInfo, BillInfo, Image } from './style';
import { Subscript, Bold } from '@components/MallCard/style';
import { Bottom } from '@components/SpaceCard/style';
import LinkWrapper from '@components/LinkWrapper';

const WatchlistCard: FunctionComponent = () => {
    return (
        <LinkWrapper link="/mall/1" as="mall/1">
            <ActiveCardStyle>
                <Image img="/images/space-placeholder.jpg" w="100%" h="320px" />
                <SpaceInfo>
                    <Top>
                        <div>Kota Kasablanka</div>
                        <div>Retail</div>
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
                </SpaceInfo>
                <BillInfo>
                    <Top>
                        <div>Bills</div>
                        <div>
                            <Subscript>due in</Subscript>16 Days
                        </div>
                    </Top>
                    <Bottom>
                        <div>Price Per Month</div> <div>45.000.000</div>
                    </Bottom>
                    <Bottom>
                        <div>Total Month(s)</div> <div>3</div>
                    </Bottom>
                    <Bottom>
                        <div>
                            <Bold>Total</Bold>
                        </div>
                        <div>135.000.000</div>
                    </Bottom>
                </BillInfo>
            </ActiveCardStyle>
        </LinkWrapper>
    );
};

export default WatchlistCard;
