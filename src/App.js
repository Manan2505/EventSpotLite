import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import { useState } from 'react';
import {events} from './components/data/events'
import Card from './components/Card';
import Cards from './components/Cards'
import Navbar from './components/Navbar';
import Approach from './components/Approach';
import Eyes from './components/Eyes';
import About from './components/About';
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const locomotiveScroll=new LocomotiveScroll();
  
  return (
    <div className="App bg-gray-100">
      <Navbar/>
      <Hero/>
    <Approach title="PACK YOUR BAGS" />
    <About />
    <Cards/>
    </div>
  );
}

export default App;
