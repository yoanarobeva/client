import './App.css';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { Footer } from './components/Footer';
// import { UserDelete } from './components/UserDelete';
// import { UserCreateEdit } from './components/CreateEdit';
// import { UserDetails } from './components/UserDetails';

function App() {
  return (
    <>
      <Header />

      <main className="main">

        <section className="card users-container">

          <Search />

          {/* <!-- Table component --> */}
          <Table />

          {/* <!-- New user button  --> */}
          <button className="btn-add btn">Add new user</button>

          <Pagination />

        </section>

        {/* <!-- User details component  --> */}
        {/* <UserDetails /> */}


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
