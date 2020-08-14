import React, { FunctionComponent } from 'react';
import { SearchBarWrapper, SearchField, SearchIcon } from './style';
import { Image } from '@components/Image';

export const SearchBarWithIcon: FunctionComponent = () => {
    return (
        <SearchBarWrapper>
            <SearchIcon>
                <Image style={{ color: 'red' }} img="/icons/search.svg" w="24px" h="24px" />
            </SearchIcon>
            <SearchField placeholder="Find Space" />
        </SearchBarWrapper>
    );
};

export const SearchBar: FunctionComponent = () => {
    return (
        <SearchBarWrapper>
            <SearchField placeholder="Find Space" />
        </SearchBarWrapper>
    );
};
