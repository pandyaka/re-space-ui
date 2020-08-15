import React, { SFC } from 'react';

import { TopSearchStyle } from './style';
import { SearchBarWithIcon } from '@components/SearchBar';
import Container from '@components/Container';
import Dropdown from '@components/Dropdown';

const TopSearch: SFC = () => {
    return (
        <TopSearchStyle noPadding lined>
            <Container>
                <SearchBarWithIcon />
                <Dropdown />
                <Dropdown />
            </Container>
        </TopSearchStyle>
    );
};

export default TopSearch;
