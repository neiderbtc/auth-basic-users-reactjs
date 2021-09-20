import React, { FC } from 'react';
import ImageLateralFormAuth from '../../atoms/ImageLateralFormAuth';
import Logo from '../../atoms/Logo';

type Props = {
    children: JSX.Element | JSX.Element[];
}

const ContainerFormAuth: FC<Props> = ({ children }) => {
    return (
        <div className="bg-white font-family-karla h-screen">

            <div className="w-full flex flex-wrap">

                <div className="w-full md:w-1/2 flex flex-col">

                    <Logo text="See Users" />

                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        {children}
                    </div>
                </div>
                <ImageLateralFormAuth />
            </div>
        </div>
    );
};

export default ContainerFormAuth;