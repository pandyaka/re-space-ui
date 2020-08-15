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

interface InputProps {
    formKey: string;
    textHandler;
}

export const SearchBar: FunctionComponent<InputProps> = ({ formKey, textHandler }: InputProps) => {
    return (
        <SearchBarWrapper>
            <SearchField
                onChange={(event) => {
                    textHandler(formKey, event.target.value);
                }}
                placeholder="Find Space"
            />
        </SearchBarWrapper>
    );
};
