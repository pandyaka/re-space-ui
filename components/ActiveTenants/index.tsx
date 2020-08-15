import React, { FunctionComponent, useState } from 'react';

import { ActiveTenantsStyle, ActiveTenantsHeader, ActiveTenantsTitle, ActiveTenantsOption } from './style';
import ActiveTenantCard from '@components/ActiveTenantCard';
import VerticalScrollContainer from '@components/VerticalScrollContainer';
import SPACE_TYPE from 'common/space-type';

const ActiveTenants: FunctionComponent = () => {
    const [category, setCategory] = useState(SPACE_TYPE[0]);
    const [activeTenants, setActiveTenants] = useState([]);

    const handleCategoryClick = (cat) => {
        setCategory(cat);
    };

    return (
        <ActiveTenantsStyle>
            <ActiveTenantsHeader>
                <ActiveTenantsTitle>Active Tenants</ActiveTenantsTitle>
                {SPACE_TYPE.map((el, idx) => (
                    <ActiveTenantsOption key={idx} selected={el === category} onClick={() => handleCategoryClick(el)}>
                        {el}
                    </ActiveTenantsOption>
                ))}
            </ActiveTenantsHeader>
            <VerticalScrollContainer height="160px">
                {[...Array(10).keys()].map((el, idx) => (
                    <ActiveTenantCard key={idx} />
                ))}
            </VerticalScrollContainer>
        </ActiveTenantsStyle>
    );
};

export default ActiveTenants;
