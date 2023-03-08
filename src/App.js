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

    const createdUser = await userService.create(data);

    setUsers(state => [...state, createdUser]);
  };

  const onDeleteClick = async (userId) => {
    // await userService.delete(userId);
  };

  return (
    <>
      <Header />

      <main className="main">

        <section className="card users-container">

          <Search />

          {/* <!-- Table component --> */}
          <Table users={users} onUserCreateSubmit={onUserCreateSubmit} onDeleteClick={onDeleteClick} />

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
