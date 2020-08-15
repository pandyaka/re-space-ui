import React, { FunctionComponent } from 'react';
import { SearchBarWrapper, SearchField, SearchIcon } from './style';
import LinkWrapper from '@components/LinkWrapper';
import { Image } from '@components/Image';

interface InputProps {
    formKey: string;
    href?: string;
    textHandler;
}

export const SearchBarWithIcon: FunctionComponent<InputProps> = ({ formKey, href, textHandler }: InputProps) => {
    return (
        <SearchBarWrapper>
            <LinkWrapper link={href}>
                <SearchIcon>
                    <Image img="/icons/search.svg" w="24px" h="24px" />
                </SearchIcon>
            </LinkWrapper>
            <SearchField
                placeholder="Find Space"
                onChange={(event) => {
                    textHandler(formKey, event.target.value);
                }}
            />
        </SearchBarWrapper>
    );
};

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
