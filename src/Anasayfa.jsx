// src/components/ProjectsPage.jsx
import React from 'react';
import styles from './App.module.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Experience } from "./components/Experience/Experience"
import { SingleServices } from './components/Services/SingleServices'
import {Projects} from "./components/Projects/Projects"

import Ss from "./page/Ss"
import { Routes, Route } from 'react-router-dom'; 
import Contact from './components/Contact/Contact';

const Anasayfa = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <SingleServices/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Anasayfa;
