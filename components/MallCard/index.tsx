import React, { FunctionComponent } from 'react';
import { MallCardStyle, Top, Bottom, Bold, Subscript } from './style';
import { Image } from '@components/Image';

const MallCard: FunctionComponent = () => {
    return (
        <MallCardStyle>
            <Image img="/images/mall-placeholder.jpg" w="100%" h="280px" />
            <Top>
                <div>Kota Kasablanka</div>
                <div>
                    <Subscript>from</Subscript>Rp45jt/Month
                </div>
            </Top>
            <Bottom>Jl. Casablanca Raya Kav. 88, Menteng Dalam, Jakarta Selatan</Bottom>
            <Bottom>
                <Bold>Available Spaces:</Bold> Food & Beverages, Fashion, Retail
            </Bottom>
        </MallCardStyle>
    );
};

export default MallCard;
