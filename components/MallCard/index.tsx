import React, { FunctionComponent } from 'react';
import { MallCardStyle, Top, Bottom, Bold, Subscript } from './style';
import { Image } from '@components/Image';
import LinkWrapper from '@components/LinkWrapper';

interface MallCardProps {
    id: string;
    name: string;
    location: string;
    image_url: string[];
}

const MallCard: FunctionComponent<MallCardProps> = (props: MallCardProps) => {
    const { id, name, location, image_url } = props;
    const link = `/mall/${id}`;
    return (
        <LinkWrapper link="/mall/[id]" as={link}>
            <MallCardStyle>
                <Image img={image_url[0]} w="100%" h="280px" />
                <Top>
                    <div>{name}</div>
                    <div>
                        <Subscript>from</Subscript>Rp45jt/Month
                    </div>
                </Top>
                <Bottom>{location}</Bottom>
                <Bottom>
                    <Bold>Available Spaces:</Bold> Food & Beverages, Fashion, Retail
                </Bottom>
            </MallCardStyle>
        </LinkWrapper>
    );
};

export default MallCard;
