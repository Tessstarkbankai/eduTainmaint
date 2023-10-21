import React from 'react';
import './App.css';
import { Button } from 'antd';
import Navbar from './components/navbar/Navbar';
import EventsPage from './components/EventsPage';
import BookingPage from './components/BookingPage';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
      <BookingPage/>
    </div>
    </div>
  );
}

export default App;
