import React, { SFC } from 'react';

import { TopSearchStyle } from './style';
import { SearchBarWithIcon } from '@components/SearchBar';
import Container from '@components/Container';

const TopSearch: SFC = () => {
    return (
        <TopSearchStyle noPadding lined>
            <Container>
                <SearchBarWithIcon />
            </Container>
        </TopSearchStyle>
    );
};

export default TopSearch;
