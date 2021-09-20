import React, { ChangeEventHandler, FC } from 'react';

type Props = {
    placeholder?: string;
    name?: string;
    onChange?: ChangeEventHandler,
    type?: string;
}

const InputText: FC<Props> = ({ placeholder, name, onChange, type }) => {
    return (
        <input
            type={type || 'text'}
            placeholder={placeholder}
            name={name}
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onChange ? onChange : () => { }}
        />
    );
};

export default InputText;