import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import { useState,useEffect } from 'react';
import {events} from './components/data/events'
import Card from './components/Card';
import Cards from './components/Cards'
import Navbar from './components/Navbar';
import Approach from './components/Approach';
import Eyes from './components/Eyes';
import About from './components/About';
import LocomotiveScroll from 'locomotive-scroll';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Details from './components/Details';
function App() {
    const locomotive = new LocomotiveScroll();
  return (
    <div data-scroll-container className="App bg-gray-100">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Hero/>}></Route>
      <Route path="/event/:eventId" element={  <Details/>}></Route>
      </Routes>
      {/* <Approach title="PACK YOUR BAGS"/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
