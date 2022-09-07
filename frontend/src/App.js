import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import AuthLogin from './components/AuthLogin';
import AdminHome from './components/adminPages/AdminHome';

import Home from './components/home/Home.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/home/AboutUs';

import AddEvent from './components/adminPages/AddEvent';
import AddAchiever from './components/adminPages/AddAchiever';



function App() {
  return (

    <React.Fragment>
      <header>
        {/* navbar goes here */}
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin/login' element={<AuthLogin />} />
          <Route path='/admin/home' element={<AdminHome />} />
<<<<<<< HEAD
          <Route path='/AboutUs' element={< AboutUs />} />
=======
          <Route path='/admin/events/add' element={<AddEvent />} />
          <Route path='/admin/events/addachiever' element={<AddAchiever />} />
>>>>>>> 2976efe596ecf6c5e0706c0abc0f19ac533f3961
        </Routes>
      </main>
    </React.Fragment>


  );
}

export default App;
