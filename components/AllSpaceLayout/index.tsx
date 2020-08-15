import React, { SFC } from 'react';

import { AllSpaceLayoutStyle, AllSpaceTitle } from './style';
import Container from '@components/Container';

const AllSpaceLayout: SFC = () => {
    return (
        <AllSpaceLayoutStyle>
            <Container>
                <AllSpaceTitle>Available Spaces</AllSpaceTitle>
            </Container>
        </AllSpaceLayoutStyle>
    );
};

export default AllSpaceLayout;
