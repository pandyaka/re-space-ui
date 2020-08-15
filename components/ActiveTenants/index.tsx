import React, { FunctionComponent, useState } from 'react';

import { ActiveTenantsStyle, ActiveTenantsHeader } from './style';

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
                <h2>Active Tenants</h2>
                {CATEGORIES.map((el, idx) => (
                    <span key={idx} onClick={() => handleCategoryClick(el)}>
                        {el}
                    </span>
                ))}
            </ActiveTenantsHeader>
            <span>{category}</span>
        </ActiveTenantsStyle>
    );
};

export default ActiveTenants;
