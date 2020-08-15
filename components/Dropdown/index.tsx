import React, { FunctionComponent } from 'react';
import { DropdownStyle } from './style';

const Dropdown: FunctionComponent = () => {
    return (
        <DropdownStyle>
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
        </DropdownStyle>
    );
};

export default Dropdown;
