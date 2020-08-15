import React, { SFC } from 'react';

import { MallHeadlineStyle, MallName } from './style';
import { Image } from '@components/Image';

interface MallHeadlineProps {
    image_url: string[];
    location: string;
    name: string;
}

const MallHeadline: SFC<MallHeadlineProps> = (props: MallHeadlineProps) => {
    const { image_url, location, name } = props;

    return (
        <MallHeadlineStyle>
            <Image w="100%" h="auto" img={`${image_url}`} />
            <MallName>{name}</MallName>
            <span>{location}</span>
        </MallHeadlineStyle>
    );
};

export default MallHeadline;
