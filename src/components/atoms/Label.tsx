import React, { FC } from 'react';

type Props = {
    text: string;
}

const Label: FC<Props> = ({ text }) => {
    return (
        <label className="text-lg">{text} </label>
    );
};

export default Label;