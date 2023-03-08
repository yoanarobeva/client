import './App.css';
import { useEffect, useState } from 'react';

import * as userService from './services/userService';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { Footer } from './components/Footer';
// import { UserDelete } from './components/UserDelete';
// import { UserCreateEdit } from './components/CreateEdit';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(setUsers)
            .catch(err => {
                console.log('Error' + err);
            });
    }, []);

    const onUserCreateSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        //add on server
        const createdUser = await userService.create(data);

        //add on state
        setUsers(state => [...state, createdUser]);
    };

    const onUserDelete = async (userId) => {
        //delete from server
        await userService.remove(userId);

        //delete from state
        setUsers(state => state.filter(x => x._id !== userId));
    };

    const onUserUpdateSubmit = async (e) => {
        e.preventDefault();
        
    };

    return (
        <>
            <Header />

            <main className="main">

                <section className="card users-container">

                    <Search />

                    <Table 
                        users={users} 
                        onUserCreateSubmit={onUserCreateSubmit} 
                        onUserDelete={onUserDelete}
                        onUserUpdateSubmit={onUserUpdateSubmit} 
                    />

                    <Pagination />

                </section>

                {/* <!-- Create/Edit Form component  --> */}
                {/* <UserCreateEdit /> */}

                {/* <!-- Delete user component  --> */}
                {/* <UserDelete /> */}

            </main>

            <Footer />

        </>
    );
}

export default App;
