import React, { SFC } from 'react';
import { SpaceCardStyle, Top, Bottom } from './style';
import { Image } from '@components/Image';
import Space from '@interfaces/space';
import { idrFormatter } from 'utils';

interface SpaceCardInterface {
    space: Space;
    onClick: (id: string) => void;
}

const SpaceCard: SFC<SpaceCardInterface> = (props: SpaceCardInterface) => {
    const { space, onClick } = props;
    const { id, name, price, size } = space;

    return (
        <SpaceCardStyle onClick={() => onClick(id)}>
            <Image img="/images/space-placeholder.jpg" w="100%" h="220px" />
            <Top>
                <div>{name}</div>
                <div>{idrFormatter(price)}/Month</div>
            </Top>
            <Bottom>
                <div>Floor</div> <div>LG</div>
            </Bottom>
            <Bottom>
                <div>Size</div> <div>{size}Msq</div>
            </Bottom>
            <Bottom>
                <div>Space No.</div> <div>69A</div>
            </Bottom>
        </SpaceCardStyle>
    );
};

export default SpaceCard;
