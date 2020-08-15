import React, { FunctionComponent } from 'react';
import { DropdownStyle } from './style';

interface DropdownInputProps {
    formKey: string;
    list: any[];
    handleChange: (key: string, value: any) => void;
}

const Dropdown: FunctionComponent<DropdownInputProps> = ({ formKey, handleChange, list }: DropdownInputProps) => {
    return (
        <DropdownStyle onChange={(event) => handleChange(formKey, event.target.value)}>
            {list.map((item, idx) => (
                <option key={idx} value={item}>
                    {item}
                </option>
            ))}
        </DropdownStyle>
    );
};

export default Dropdown;
