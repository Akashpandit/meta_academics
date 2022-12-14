import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import AuthLogin from './components/AuthLogin';
import AdminHome from './components/adminPages/AdminHome';
import Words from './components/adminPages/wordActions/Words.js';

import Home from './components/home/Home.js';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/home/AboutUs';

import AddEvent from './components/adminPages/AddEvent';
import AddAchiever from './components/adminPages/AddAchiever';
import OurEvents from './components/home/OurEvents';
import EventDetail from './components/home/EventDetail';
import EventEdit from './components/adminPages/EventEdit';
import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';


function App() {
  return (

    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin/login' element={<AuthLogin />} />
          <Route path='/admin/home' element={<AdminHome />} />
          <Route path='/AboutUs' element={< AboutUs />} />

          <Route path='/words' element={< Words />} />

          <Route path='/admin/events/add' element={<AddEvent />} />
          <Route path='/admin/events/addachiever' element={<AddAchiever />} />



          <Route path='/OurEvents' element={<OurEvents />} />
          <Route path='/eventdetail' element={<EventDetail />} />


          <Route path='/admin/events/edit/:id' element={<EventEdit />} />
        </Routes >
        <Footer />
      </main >
    </React.Fragment >



  );
}

export default App;
