import React, { SFC } from 'react';
import {
    FastFood,
    Shirt,
    GameController,
    Cart,
    Brush,
    PhonePortrait,
    Medkit,
    Barbell,
    Home
} from '@styled-icons/ionicons-outline';

interface SpaceTypeIconInterface {
    type: string;
    [key: string]: any;
}

const SpaceTypeIcon: SFC<SpaceTypeIconInterface> = (props: SpaceTypeIconInterface) => {
    switch (props.type) {
        case 'food & beverage':
            return <FastFood {...props} />;
        case 'fashion':
            return <Shirt {...props} />;
        case 'kids & entertainment':
            return <GameController {...props} />;
        case 'small retail':
            return <Cart {...props} />;
        case 'beauty':
            return <Brush {...props} />;
        case 'gadget & electronic':
            return <PhonePortrait {...props} />;
        case 'health':
            return <Medkit {...props} />;
        case 'fitness':
            return <Barbell {...props} />;
        case 'home & living':
            return <Home {...props} />;
    }

    return null;
};

export default SpaceTypeIcon;
