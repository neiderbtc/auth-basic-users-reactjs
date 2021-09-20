import React, { FC } from 'react';
import {ReactComponent as Music} from '../../../assets/icons/music.svg';
type Props = {
    name: string;
    email: string;
    avatar: string;
    id: number;
}

const CardUser: FC<Props> = ({ name, email, avatar, id }) => {
    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
            <img className="w-full h-56 object-cover object- center" src={avatar} alt="avatar" />
            <div className="flex items-center px-6 py-3 bg-gray-900">
              <Music />
                <h1 className="mx-3 text-white font-semibold text-lg">Focusing</h1>
            </div>
            <div className="py-4 px-6">
                <h1 className="text-2xl font-semibold text-gray-800">{name} </h1>
                <p className="py-2 text-lg text-gray-700">ID/{id} </p>

                <div className="flex items-center mt-4 text-gray-700">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                        <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                    </svg>
                    <h1 className="px-2 text-sm">{email} </h1>
                </div>
            </div>
        </div>
    );
};

export default CardUser;