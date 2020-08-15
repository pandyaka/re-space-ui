import React, { SFC } from 'react';
import { SpaceCardStyle, Top, Bottom } from './style';
import { Image } from '@components/Image';

interface SpaceCardInterface {
    onClick: () => void;
}

const SpaceCard: SFC<SpaceCardInterface> = (props: SpaceCardInterface) => {
    const { onClick } = props;

    return (
        <SpaceCardStyle onClick={onClick}>
            <Image img="/images/space-placeholder.jpg" w="100%" h="220px" />
            <Top>
                <div>Retail</div>
                <div>Rp45jt/Month</div>
            </Top>
            <Bottom>Floor LG</Bottom>
            <Bottom>Size 15 m2</Bottom>
            <Bottom>Space No. 244A</Bottom>
        </SpaceCardStyle>
    );
};

export default SpaceCard;
