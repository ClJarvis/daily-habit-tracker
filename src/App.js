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
      <NavBar />
      <div className="container mt-5">
      <Router>
        <Routes>
          <Route exact path="/" element={<AddHabit />} />
          <Route exact path="/view-weekly" element={<ViewWeekly />} />
        </Routes>
        </Router>
      </div>
    </>
    );
  };

export default App;
