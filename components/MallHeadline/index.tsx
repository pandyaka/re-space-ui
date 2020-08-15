import React, { SFC } from 'react';

import { MallHeadlineStyle, MallName } from './style';
import { Image } from '@components/Image';

const MallHeadline: SFC = () => {
    return (
        <MallHeadlineStyle>
            <Image w="100%" h="auto" img="/images/mall-placeholder.jpg" />
            <MallName>Kota Kasablanka</MallName>
            <span>Jl. Casablanca Raya Kav. 88, Menteng Dalam, Jakarta Selatan</span>
        </MallHeadlineStyle>
    );
};

export default MallHeadline;
