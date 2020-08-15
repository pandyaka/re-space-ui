import React, { useState, FunctionComponent } from 'react';
import { LandingSearchStyle, WelcomeCaption, WelcomeSubCaption, SearchBottom } from './style';
import { SearchBar } from '@components/SearchBar';
import Dropdown from '@components/Dropdown';
import { Button } from '@components/Button';

interface SearchQuery {
    spaceType: string;
    contractType: string;
    location: string;
    query: string;
}

const defaultSearchQuery: SearchQuery = {
    spaceType: 'fnb',
    contractType: 'lease',
    location: '',
    query: ''
};

const mockContractList = ['lease', 'rent'];
const mockTypeList = ['fnb', 'fashion'];

const LandingSearch: FunctionComponent = () => {
    const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);
    const inputHandler = (key, value) => {
        const newQuery = { ...searchQuery };
        newQuery[key] = value;
        newQuery.query = `/search?contractType=${newQuery.contractType}&spaceType=${newQuery.spaceType}&location=${newQuery.location}`;
        setSearchQuery(newQuery);
    };
    return (
        <LandingSearchStyle>
            <WelcomeCaption>Find the Best Commercial Spaces for Your Business Now</WelcomeCaption>
            <WelcomeSubCaption>
                Make your decision by reviewing floor plans and spot tenants with similiar business
            </WelcomeSubCaption>
            <SearchBar formKey="location" textHandler={inputHandler} />
            <SearchBottom>
                <Dropdown formKey="contractType" list={mockContractList} handleChange={inputHandler} />
                <Dropdown formKey="spaceType" list={mockTypeList} handleChange={inputHandler} />
                <Button ph="search" href={searchQuery.query} w="144px" h="40px" bc="#FF427F" c="white" />
            </SearchBottom>
        </LandingSearchStyle>
    );
};

export default LandingSearch;
