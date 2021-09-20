import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = {
    to: string;
    text: string;
}

const ItemMenuHeader: FC<Props> = ({ to, text }) => {
    const { pathname } = useLocation();

    return (
        <Link
            to={to}
            className={`py-4 px-2 ${pathname === to ?
                    'text-indigo-500 border-b-4 border-indigo-500' :
                    'text-gray-500 hover:text-indigo-500 transition duration-300'
                }  font-semibold`}
        >
            {text}
        </Link>
    );
};

export default ItemMenuHeader;