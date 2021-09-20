import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';
import ItemMenuHeader from '../../atoms/ItemMenuHeader';
import ItemMenuHeaderMovil from '../../atoms/ItemMenuHeaderMovil';
const items = [
    {
        text: 'Home',
        to: '/'
    },
    {
        text: 'Services',
        to: '/services'
    },
    {
        text: 'About',
        to: '/about'
    }
]
const NavHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { isLogin, closeSession } = useContext(AuthContext);
    return (
        <nav className="bg-white shadow-lg mb-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link to="#" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-500 text-lg">See Users</span>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            {
                                items.map((item, index) => <ItemMenuHeader key={index} text={item.text} to={item.to} />)
                            }
                        </div>
                    </div>
                    <div className="my-5 md:flex items-center space-x-3 lg:my-0">
                        {
                            isLogin ? <button onClick={closeSession} className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Sign off</button>
                                : (
                                    <>
                                        <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Log In</Link>
                                        <Link to="/register" className="py-2 px-2 font-medium text-white bg-indigo-500 rounded hover:bg-indigo-400 transition duration-300">Sign Up</Link>
                                    </>)
                        }
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                            <svg className=" w-6 h-6 text-gray-500 hover:text-indigo-500 "
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'show' : 'hidden'} mobile-menu`}>
                <ul className="">
                    {
                        items.map((item, index) => <ItemMenuHeaderMovil key={index} text={item.text} to={item.to} />)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default NavHeader;