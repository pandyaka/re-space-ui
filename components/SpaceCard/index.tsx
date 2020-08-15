import React, { FunctionComponent } from 'react';
import { SpaceCardStyle, Top, Bottom } from './style';
import { Image } from '@components/Image';

const SpaceCard: FunctionComponent = () => {
    return (
        <SpaceCardStyle>
            <Image img="/images/space-placeholder.jpg" w="100%" h="220px" />
            <Top>
                <div>Retail</div>
                <div>Rp45jt/Month</div>
            </Top>
            <Bottom>
                <div>Floor</div> <div>LG</div>
            </Bottom>
            <Bottom>
                <div>Size</div> <div>24Msq</div>
            </Bottom>
            <Bottom>
                <div>Space No.</div> <div>69A</div>
            </Bottom>
        </SpaceCardStyle>
    );
};

export default SpaceCard;
