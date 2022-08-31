import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import AuthLogin from './components/AuthLogin';
import AdminHome from './components/adminPages/AdminHome';
import AddEvent from './components/adminPages/AddEvent';


function App() {
  return (

    <React.Fragment>
      <header>
        {/* navbar goes here */}
      </header>
      <main>
        <Routes>
          <Route path='/' element={
            <div className="App">
              Hello, Arpita and Akash!
            </div>
          } />
          <Route path='/admin/login' element={<AuthLogin />} />
          <Route path='/admin/home' element={<AdminHome />} />
          <Route path='/admin/events/add' element={<AddEvent />} />
        </Routes>
      </main>
    </React.Fragment>


  );
}

export default App;
