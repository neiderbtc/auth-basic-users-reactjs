import React, { FC } from 'react';

const ImageLateralFormAuth: FC = () => {
    return (
        <div className="w-1/2 shadow-2xl">
            <img
                className="object-cover w-full h-screen hidden md:block"
                src="https://source.unsplash.com/random"
                alt="Background" />
        </div>
    );
};

export default ImageLateralFormAuth;