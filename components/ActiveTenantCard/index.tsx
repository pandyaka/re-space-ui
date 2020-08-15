import React, { SFC } from 'react';

import { ActiveTenantCardStyle, CardTitle, CardDetail } from './style';

const ActiveTenantCard: SFC = () => {
    return (
        <ActiveTenantCardStyle>
            <CardTitle>Ta Wan</CardTitle>
            <span>Asian Cuisine</span>
            <div>
                <CardDetail>Floor UG</CardDetail>
                <CardDetail>Size 100 x 30</CardDetail>
                <CardDetail>Space No. 243A</CardDetail>
            </div>
        </ActiveTenantCardStyle>
    );
};

export default ActiveTenantCard;
