import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {
    to: string;
    text: string;
}

const ItemMenuHeaderMovil: FC<Props> = ({ to, text }) => {
    const { pathname } = useLocation();
    return (
        <li
            className={pathname === to ? 'active' : ''}>
            <Link to={to}
                className={`block text-sm px-2 py-4  
                ${pathname === to ?
                        'text-white bg-green-500 font-semibold' :
                        'hover:bg-green-500 transition duration-300'}`
                }>
                {text}
            </Link>
        </li>
    );
};

export default ItemMenuHeaderMovil;