import './App.css';
// eslint-disable-next-line 
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import AddHabit from './Components/AddHabit';
import ViewWeekly from './Components/ViewWeekly';


const App = () => {
  return (
    <>
    <Router>
      <NavBar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<AddHabit />} />
          <Route path="/ViewWeekly" element={<ViewWeekly />} />
        </Routes>
      </div>
    </Router>
    </>
    );
  };


export default App;
