import React, { useState, FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { TopSearchStyle } from './style';
import { SearchBarWithIcon } from '@components/SearchBar';
import Container from '@components/Container';
import Dropdown from '@components/Dropdown';

const TopSearch: FunctionComponent = () => {
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
    const router = useRouter();
    const { location, contractType, spaceType } = router.query;
    const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);
    const inputHandler = (key, value) => {
        const newQuery = { ...searchQuery };
        newQuery[key] = value;
        newQuery.query = `/search?contractType=${newQuery.contractType}&spaceType=${newQuery.spaceType}&location=${newQuery.location}`;
        setSearchQuery(newQuery);
    };
    return (
        <TopSearchStyle noPadding lined>
            <Container flex>
                <SearchBarWithIcon formKey="location" textHandler={inputHandler} href={searchQuery.query} />
                <Dropdown
                    defaultValue={contractType}
                    formKey="contractType"
                    list={mockContractList}
                    handleChange={inputHandler}
                />
                <Dropdown
                    defaultValue={spaceType}
                    formKey="spaceType"
                    list={mockTypeList}
                    handleChange={inputHandler}
                />
            </Container>
        </TopSearchStyle>
    );
};

export default TopSearch;
