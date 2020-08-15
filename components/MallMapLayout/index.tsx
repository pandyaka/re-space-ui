import React, { SFC } from 'react';

import { MallMapLayoutStyle, MallMapGrid, MapCell } from './style';
import Container from '@components/Container';
import ActiveTenants from '@components/ActiveTenants';
import InteractiveMap from '@components/InteractiveMap';
import MallHeadline from '@components/MallHeadline';
import AllSpace from '@components/AllSpace';
import Mall from '@interfaces/mall';

interface MallMapProps {
    mall: Mall;
}

const MallMapLayout: SFC<MallMapProps> = (props: MallMapProps) => {
    const { mall } = props;
    const { map_url, image_url, location, name, spaces } = mall;

    return (
        <MallMapLayoutStyle>
            <Container>
                <MallMapGrid>
                    <MapCell>
                        <InteractiveMap url={map_url[0]} onLocationClick={console.log} />
                    </MapCell>
                    <MallHeadline image_url={image_url} location={location} name={name} />
                    <ActiveTenants />
                    <AllSpace spaces={spaces} />
                </MallMapGrid>
            </Container>
        </MallMapLayoutStyle>
    );
};

export default MallMapLayout;
