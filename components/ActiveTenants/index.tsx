import React, { FunctionComponent, useState } from 'react';

import { ActiveTenantsStyle, ActiveTenantsHeader, ActiveTenantsTitle, ActiveTenantsOption } from './style';
import ActiveTenantCard from '@components/ActiveTenantCard';
import VerticalScrollContainer from '@components/VerticalScrollContainer';

const CATEGORIES = [
    'food & beverage',
    'fashion',
    'kids & entertainment',
    'small retail',
    'beauty',
    'gadget & electronic',
    'health',
    'fitness',
    'home & living'
];

const ActiveTenants: FunctionComponent = () => {
    const [category, setCategory] = useState(CATEGORIES[0]);

    const handleCategoryClick = (cat) => {
        setCategory(cat);
    };

    return (
        <ActiveTenantsStyle>
            <ActiveTenantsHeader>
                <ActiveTenantsTitle>Active Tenants</ActiveTenantsTitle>
                {CATEGORIES.map((el, idx) => (
                    <ActiveTenantsOption key={idx} selected={el === category} onClick={() => handleCategoryClick(el)}>
                        {el}
                    </ActiveTenantsOption>
                ))}
            </ActiveTenantsHeader>
            <VerticalScrollContainer height="170px">
                {[...Array(10).keys()].map((el, idx) => (
                    <ActiveTenantCard key={idx} />
                ))}
            </VerticalScrollContainer>
        </ActiveTenantsStyle>
    );
};

export default ActiveTenants;
