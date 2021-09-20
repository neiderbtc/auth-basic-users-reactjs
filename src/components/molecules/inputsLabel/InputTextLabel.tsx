import React, { ChangeEventHandler, FC } from 'react';
import InputText from '../../atoms/InputText';
import Label from '../../atoms/Label';

type Props = {
    label: string;
    input?: {
        name?: string;
        placeholder?: string;
        onChange?: ChangeEventHandler;
        type?: string;
    }
    error?: string ;
}


const InputTextLabel: FC<Props> = ({ label, input, error }) => {
    return (
        <div className="flex flex-col pt-4">
            <Label text={label} />
            <InputText
                placeholder={input?.placeholder}
                name={input?.name}
                onChange={input?.onChange}
                type={input?.type}
            />
            <small className="text-red-500 my-1">{error} </small>
        </div>
    );
};

export default InputTextLabel;