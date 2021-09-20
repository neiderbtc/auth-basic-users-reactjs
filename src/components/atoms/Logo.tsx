import React, { FC } from 'react';
import { Link } from 'react-router-dom';
type Props = {
    text: string;
}

const Logo: FC<Props> = ({ text }) => {
    return (
        <div
            className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <Link
                to="/"
                className="bg-indigo-900 text-white font-bold text-xl p-4">
                {text}
            </Link>
        </div>
    );
};

export default Logo;