import React, { FC } from 'react';

type Props = {
    text: string;
    submit?: boolean;
}

const Button: FC<Props> = ({ text, submit }) => {
    return (
        <button
            type={submit ? 'submit' : 'button'}
            className="bg-indigo-800 text-white font-bold text-lg hover:bg-indigo-700 p-2 mt-8">
            {text}
        </button>
    );
};

export default Button;