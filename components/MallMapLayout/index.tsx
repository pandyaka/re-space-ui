import React, { SFC } from 'react';

import { MallMapLayoutStyle, MallMapGrid, MapCell } from './style';
import Container from '@components/Container';
import ActiveTenants from '@components/ActiveTenants';
import InteractiveMap from '@components/InteractiveMap';
import MallHeadline from '@components/MallHeadline';

const MallMapLayout: SFC = () => {
    return (
        <MallMapLayoutStyle>
            <Container>
                <MallMapGrid>
                    <MapCell>
                        <InteractiveMap
                            url="https://gist.githubusercontent.com/wirasuta/37c7ff8f1284a45a2686f3a1b43e0d64/raw/2b53c55a6920517e2620c2f788ad57f2c2fef5a1/sample.svg"
                            onLocationClick={console.log}
                        />
                    </MapCell>
                    <MallHeadline />
                    <ActiveTenants />
                </MallMapGrid>
            </Container>
        </MallMapLayoutStyle>
    );
};

export default MallMapLayout;
