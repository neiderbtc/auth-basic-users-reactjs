import React, { useEffect, useState } from 'react';
import { get } from '../../helpers/http/http';
import CardUser from '../molecules/cards/CardUser';
import Footer from '../organisms/footers/Footer';
import NavHeader from '../organisms/nav/NavHeader';

const Home = () => {
    type TUsers = {
        id: number;
        first_name: string;
        email: string;
        avatar: string;
    }
    const [users, setUsers] = useState<TUsers[]>([]);

    useEffect(() => {
        get('users?per_page=12').then(response => setUsers(response.data))
    }, [])

    return (
        <>
            <NavHeader />
            <div className="grid grid-cols-2  lg:grid-cols-6 gap-4 w-10/12 mx-auto">
                {
                    users.map((user: TUsers) => <CardUser
                        key={user.id}
                        name={user.first_name}
                        email={user.email}
                        avatar={user.avatar}
                        id={user.id}
                    />)
                }
            </div>
            <Footer />
        </>
    );
};

export default Home;