import React, { FC } from 'react';

type Props = {
    title: string;
}

const TitleFormAuth: FC<Props> = ({ title }) => {
    return (
        <p className="text-center text-3xl">{title} </p>
    );
};

export default TitleFormAuth;